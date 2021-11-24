/**********************************************************************
 *
 * @模块名称: TestUseResize
 *
 * @模块用途: TestUseResize
 *
 * @创建人: pgli
 *
 * @date: 2021/10/29 9:19
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {useResize} from "../../src";

type TestUseResizeProps = {};
const TestUseResize: React.FC<TestUseResizeProps> = (props) => {
	const windowSize = useResize();
	return (
		<React.Fragment>
			<h3>windowSize</h3>
			{JSON.stringify(windowSize, null, 4)}
		</React.Fragment>
	)
};

export default TestUseResize;
