/**********************************************************************
 *
 * @模块名称: useThrottleAndMerge
 *
 * @模块作用: useThrottleAndMerge
 *
 * @创建人: gaopeng123
 *
 * @date: 2023/1/6 2:08 下午
 *
 * @版权所有: gaopeng123
 *
 **********************************************************************/
import React, { useEffect, useRef, useCallback, useState } from 'react';
import { createThrottle, throttleOptions, ThrottleOptions } from "@gaopeng123/utils.function";

type Fn = (...props: any) => any;
export type Fns = { [key: string]: Fn };

export const useThrottleAndMerge = (fn: Fn | Fns, wait: number = 200, options: ThrottleOptions = {}, dep: any[] = []) => {
    const { current } = useRef<any>({ fn, timer: 0 });
    const [isFns] = useState(typeof fn !== 'function');
    useEffect(function () {
        current.data = isFns ? {} : [];
        current.timmer = null;
        current.fn = () => {
            clearTimeout(current.timmer);
            current.timmer = setTimeout(() => {
                if (!current.timer) {
                    current.timer = 0;
                }
            }, wait);
            if (isFns ? Object.keys(current.data).length : current.data.length) {
                if (!isFns) {
                    (fn as Fn)(current.data);
                } else {
                    for (const cFn in fn) {
                        if (current.data[cFn]?.length) {
                            (fn as Fns)[cFn](current.data[cFn]);
                        }
                    }
                }
            }
            current.data = isFns ? {} : [];
        };
    }, [fn]);

    return useCallback(function f(...args) {
        const throttle = createThrottle(current.fn, wait, throttleOptions(Object.assign({
            leading: true,
            type: 2,
        }, options, {
            notThrottle: (result: any) => {
                if (isFns) {
                    const key = result.__key;
                    if (!current.data[key]) {
                        current.data[key] = [];
                    }
                    current.data[key].push(result.data);
                } else {
                    current.data.push(result);
                }
                if (options.notThrottle) {
                    options.notThrottle(result);
                }
            },
            clearTimeout: (now: any) => {
                current.timer = now;
            }
        })), current.timer);
        // @ts-ignore
        current.timer = throttle(...args);
    }, dep);
};