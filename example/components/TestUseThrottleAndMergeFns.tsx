/**********************************************************************
 *
 * @模块名称: TestUseThrottleAndMergeFns
 *
 * @模块作用: TestUseThrottleAndMergeFns
 *
 * @创建人: gaopeng123
 *
 * @date: 2023/1/18 4:50 下午
 *
 * @版权所有: gaopeng123
 *
 **********************************************************************/
import React, { useEffect, useRef, useState } from 'react';
import { useThrottleAndMergeFns } from "../../packages/useThrottleAndMerge/src";

type TestUseThrottleAndMergeFnsProps = {};
const TestUseThrottleAndMergeFns: React.FC<TestUseThrottleAndMergeFnsProps> = (props) => {
    const ref = useRef({a: 0, b: 0});
    const [events, setEvents] = useState<any>(ref.current);
    // 事件源基于key来区分；
    // 例如：a函数接受事件a，b函数接受事件b
    const {a: onClick1, b: onClick2} = useThrottleAndMergeFns({a: (res: any)=> {
            ref.current.a = ref.current.a + res.length;
            setEvents(Object.assign({}, ref.current));
            console.log(22)
        }, b: (res: any)=> {
            ref.current.b = ref.current.b + res.length;
            setEvents(Object.assign({}, ref.current));
        }}, 1000);

    useEffect(()=> {
        const bth: any = document.querySelector('#TestUseThrottleAndMerge-test1')
        const bth2: any = document.querySelector('#TestUseThrottleAndMerge-test2')
        const loop = ()=> {
            setTimeout(()=> {
                // @ts-ignore
                bth.click();
                setTimeout(()=> {
                    // @ts-ignore
                    bth2.click();
                }, Math.random() * 10)
                loop();
            }, Math.random() * 100)
        }
        // loop();
    }, []);

    return (
        <>
            useThrottleAndMergeFns <br/>
            <button id={'TestUseThrottleAndMerge-test1'} onClick={onClick1}>点击查看打印a</button><br/>
            <button id={'TestUseThrottleAndMerge-test2'} onClick={onClick2}>点击查看打印b</button>
            <br/>
            <div>clicka总次数：{events.a}</div>
            <div>clickb总次数：{events.b}</div>
        </>
    )
}

export default TestUseThrottleAndMergeFns;