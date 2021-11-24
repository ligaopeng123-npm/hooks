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
import React from 'react';
import {useScale} from "../../src";

type TestUseScaleProps = {};
const TestUseScale: React.FC<TestUseScaleProps> = (props) => {
	const scale = useScale({width: 1920, height: 1080});
	return (
		<React.Fragment>
			<h3>useScale</h3>
			scale: {
			JSON.stringify(scale, null, 2)
		}
		</React.Fragment>
	)
};

export default TestUseScale;
