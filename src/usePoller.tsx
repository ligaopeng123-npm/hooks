/**********************************************************************
 *
 * @模块名称: usePoller
 *
 * @模块用途: usePoller 轮询器
 *
 * @date: 2021/8/26 17:36
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {useEffect, useState} from 'react';
import {isFunction, isUndefined} from "@gaopeng123/utils";

export type PollerMark = {
	states: 'stop' | 'start' | number;
	props?: any; // 上次callBack、asyncCallBack返回的结果
	time: number; // 执行时间
	startStamp: number; // 轮询开始时间
	currentStamp: number; // 当前时刻
	endStamp: number; // 轮询结束时间
}

export type PollerProps = {
	delay?: number; // 执行间隔
	immediate?: boolean; // 是否立即执行 还是由startPoller开启 默认立即执行
	callBack?: (date: PollerMark) => void; // 执行回调
	asyncCallBack?: (args: PollerMark) => Promise<any>;
}

const usePoller = (props: PollerProps): [number, () => void, () => void] => {
	const {delay, callBack, asyncCallBack, immediate} = props;
	// 日期时间戳记录
	const [dateStamp, setDateStamp] = useState<number>(Date.now());
	// 轮询记录
	const [pollMark, setPollMark] = useState<PollerMark>({
		states: immediate === false ? 'stop' : 0,
		time: 0,
		startStamp: dateStamp,
		currentStamp: dateStamp, // 当前时刻
		endStamp: dateStamp, // 轮询结束时间
	});
	
	useEffect(() => {
		if (pollMark.states === 'stop') {
			return () => {
			};
		}
		// 定义共性结构体
		const getTimeout = (timeoutCallBack: (date: number) => void) => {
			return setTimeout(() => {
				const currentStamp = Date.now();
				setDateStamp(currentStamp);
				timeoutCallBack(currentStamp);
			}, delay || 5000);
		};
		// 如果是异步调度 走此函数 并将上次的结果返回 后续接着调度
		if (asyncCallBack) {
			let timeout: any;
			(async function anyNameFunction() {
				const res: any = await asyncCallBack(pollMark);
				if (!isUndefined(res)) {
					timeout = getTimeout((currentStamp) => {
						setPollMark(Object.assign({}, pollMark, {
							states: timeout,
							props: res,
							currentStamp: currentStamp,
							time: (currentStamp - pollMark.startStamp)
						}));
					});
				}
			})();
			return () => {
				clearTimeout(timeout);
			}
		} else {
			let res: any;
			callBack && isFunction(callBack) && (res = callBack(pollMark));
			const timeout: any = getTimeout((currentStamp) => {
				setPollMark(Object.assign({}, pollMark, {
					states: timeout,
					currentStamp: currentStamp,
					time: (currentStamp - pollMark.startStamp),
					props: res,
				}));
			});
			return () => {
				clearTimeout(timeout);
			}
		}
	}, [pollMark.states]);
	
	return [dateStamp, () => {
		// 开启轮询
		const startStamp = Date.now();
		setPollMark(Object.assign({}, pollMark,
			{
				states: 'start',
				startStamp: startStamp,
				endStamp: startStamp,
				time: 0
			}));
	}, () => {
		// 停止轮询
		const endStamp = Date.now();
		setPollMark(Object.assign({}, pollMark, {
			states: 'stop',
			endStamp: endStamp,
			time: endStamp - pollMark.startStamp
		}));
	}];
};

export default usePoller;
