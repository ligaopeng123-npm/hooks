/**********************************************************************
 *
 * @模块名称: TestUsePoller
 *
 * @模块用途: TestUsePoller
 *
 * @创建人: pgli
 *
 * @date: 2021/10/29 9:21
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {useEasing, usePoller} from "../../src";

type TestUsePollerProps = {};
const TestUsePoller: React.FC<TestUsePollerProps> = (props) => {
	const [time, startPoller, stopPoller] = usePoller({delay: 1200});
	const [asyncTime, startAsyncPoller, stopAsyncPoller] = usePoller({
		delay: 1200,
		immediate: false,
		asyncCallBack: async (params) => {
			console.log('params', params);
			if (params.time > 10000) {
				stopAsyncPoller();
				return;
			}
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve(`我是参数: ${Date.now()}`)
				}, 2000)
			});
		}
	});
	
	useEffect(() => {
		setTimeout(() => {
			startAsyncPoller();
		}, 2000);
		
		setTimeout(() => {
			stopPoller();
			setTimeout(() => {
				startPoller();
			}, 2000)
		}, 10009);
	}, []);
	return (
		<React.Fragment>
			<h3>usePoller</h3>
			{
				time
			}
			<h3>异步usePoller</h3>
			{
				asyncTime
			}
		</React.Fragment>
	)
};

export default TestUsePoller;
