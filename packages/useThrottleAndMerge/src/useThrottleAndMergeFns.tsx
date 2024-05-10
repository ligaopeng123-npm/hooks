/**********************************************************************
 *
 * @模块名称: useThrottleAndMergeFns
 *
 * @模块作用: useThrottleAndMergeFns
 *
 * @创建人: pgli
 *
 * @date: 2023/1/18 7:40 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import React, { useState, useLayoutEffect } from 'react';
import { useThrottleAndMerge, Fns } from "./useThrottleAndMerge";

/**
 * 合并多个节流函数
 * @param fns
 * @param wait
 */
export const useThrottleAndMergeFns = (fns: Fns, wait: number = 200) => {
    const onClick = useThrottleAndMerge(fns, wait);
    const [currentFns, setFns] = useState<any>({});
    useLayoutEffect(() => {
        const c: Fns = {};
        for (const fKey in fns) {
            c[fKey] = (data) => {
                // 基于事件的key将数据拼接到data上
                onClick({ __key: fKey, data: data });
            }
        }
        setFns(c);
    }, []);
    return currentFns;
}