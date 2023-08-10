/**********************************************************************
 *
 * @模块名称: TestUseEffectOnceInStrictMode
 *
 * @模块作用: TestUseEffectOnceInStrictMode
 *
 * @创建人: pgli
 *
 * @date: 2023/8/10 2:53 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import React, { useState, useEffect } from 'react';
import { useEffectOnceInStrictMode } from "../../packages/useEffectOnceInStrictMode/src";

const TestUseEffectOnceInStrictMode = () => {
    const [timmer, setTimmer] = useState<any>();
    useEffectOnceInStrictMode(() => {
        setTimmer((v: any) => {
            return (v || 0) + 1
        });
        return () => {
        }
    }, []);
    return (
        <div>
            执行次数：{timmer}
        </div>
    )
}

export default TestUseEffectOnceInStrictMode;