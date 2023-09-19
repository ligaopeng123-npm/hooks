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
import React, { useEffect, useRef, useState } from 'react';
import { useThrottleAndMerge, useThrottleAndMergeFns } from "../../packages/useThrottleAndMerge";

type TestUseThrottleAndMergeProps = {};
const TestUseThrottleAndMerge: React.FC<TestUseThrottleAndMergeProps> = (props) => {
    const [event, setEvent] = useState<any>([]);
    const onClick = useThrottleAndMerge((res)=> {
        setEvent((c: any)=> {
            return [...res, ...c];
        })
    }, 200);

    return (
        <>
            useThrottleAndMerge <br/>
            <button id={'TestUseThrottleAndMerge-test0'} onClick={onClick}>点击查看打印</button>
            <div>click当前事件长度：{event.length}</div><br/>
        </>
    )
}

export default TestUseThrottleAndMerge;