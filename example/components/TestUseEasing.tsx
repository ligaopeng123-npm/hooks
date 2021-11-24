/**********************************************************************
 *
 * @模块名称: TestUseEasing
 *
 * @模块用途: TestUseEasing
 *
 * @创建人: pgli
 *
 * @date: 2021/10/29 9:22
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {useEasing} from "../../src";

type TestUseEasingProps = {};
const TestUseEasing: React.FC<TestUseEasingProps> = (props) => {
	const [useCurrentData, startEasing, stopEasing] = useEasing({
		duration: 60000,
		immediate: false,
		easingType: "cubicOut",
		intervals: 1000
	});
	return (
		<React.Fragment>
			<h3>useEasing 缓动函数</h3>
			{
				useCurrentData
			}
		</React.Fragment>
	)
};

export default TestUseEasing;
