/**********************************************************************
 *
 * @模块名称: TestUseClock
 *
 * @模块用途: TestUseClock
 *
 * @创建人: pgli
 *
 * @date: 2021/10/29 9:19
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {ClockDate, useClock} from "../../src";

type TestUseClockProps = {};
const TestUseClock: React.FC<TestUseClockProps> = (props) => {
	const clock: ClockDate = useClock();
	return (
		<React.Fragment>
			<h3>useClock</h3>
			{
				`${clock.ymd} ${clock.hms} ${clock.week}`
			}
		</React.Fragment>
	)
};

export default TestUseClock;
