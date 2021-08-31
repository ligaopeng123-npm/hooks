/**********************************************************************
 *
 * @模块名称: useClock
 *
 * @模块用途: useClock  时钟显示器
 *
 * @date: 2021/8/26 18:53
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {useEffect, useState} from 'react';
import {formatTimestamp, getWeekCN} from "@gaopeng123/utils";
import usePoller from "./usePoller";

export type ClockDate = {
	ymd: string, // 年月日
	hms: string, // 时分秒
	week: string; // 周几
}

const getClockDate = (time: number) => {
	return {
		ymd: formatTimestamp(time, 'yyyy-MM-dd'),
		hms: formatTimestamp(time, 'HH:mm:ss'),
		week: getWeekCN(new Date(time))
	}
};
const useClock = (): ClockDate => {
	// 使用轮询器调用 当time变更时 触发变化 将clock返回
	const [time] = usePoller({delay: 1000});
	const [clock, setClock] = useState<ClockDate>(getClockDate(time));
	useEffect(() => {
		setClock(getClockDate(time));
	}, [time]);
	return clock;
};

export default useClock;
