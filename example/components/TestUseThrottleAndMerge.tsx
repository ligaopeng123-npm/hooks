/**********************************************************************
 *
 * @模块名称: TestUseThrottleAndMerge
 *
 * @模块作用: TestUseThrottleAndMerge
 *
 * @创建人: gaopeng123
 *
 * @date: 2023/1/6 4:50 下午
 *
 * @版权所有: gaopeng123
 *
 **********************************************************************/
import React, { useState } from 'react';
import { useThrottleAndMerge } from "../../packages/useThrottleAndMerge";

type TestUseThrottleAndMergeProps = {};
const TestUseThrottleAndMerge: React.FC<TestUseThrottleAndMergeProps> = (props) => {
    const [event, setEvent] = useState([]);
    const onClick = useThrottleAndMerge((res)=> {
        console.log(res);
        setEvent(res);
    }, 1000);
    return (
        <React.Fragment>
            <button onClick={onClick}>点击查看打印</button>
            <div>click事件长度：{event.length}</div>
        </React.Fragment>
    )
}

export default TestUseThrottleAndMerge;