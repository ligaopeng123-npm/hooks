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
    const windowSize: any = useResize();
    const list = Object.keys(windowSize);
    return (
        <React.Fragment>
            <h3>windowSize</h3>
            {
                list.map((key, index) => {
                    const laster = list[index - 1];
                    return index % 2 ? <p>{laster}: {windowSize[laster]}, {key} : {windowSize[key]},</p> : null
                })
            }
        </React.Fragment>
    )
};

export default TestUseResize;
