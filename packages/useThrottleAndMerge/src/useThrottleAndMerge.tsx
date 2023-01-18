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
import React, { useEffect, useRef, useCallback, useState, useLayoutEffect } from 'react';
import { createThrottle, throttleOptions, ThrottleOptions } from "@gaopeng123/utils.function";

type Fn = (...props: any) => any;
export type Fns = {[key:string]: Fn};

const useThrottleAndMerge = (fn: Fn | Fns, wait: number = 200, options: ThrottleOptions = {}, dep: any[] = []) => {
    const {current} = useRef<any>({fn, timer: 0});
    useEffect(function () {
        current.data = [];
        current.timmer = null;
        current.fn = ()=> {
            clearTimeout(current.timmer);
            current.timmer = setTimeout(()=> {
                if (!current.timer) {
                    current.timer = 0;
                }
            }, wait);
            if (current.data.length) {
                if (typeof fn === 'function') {
                    // @ts-ignore
                    fn([...current.data]);
                } else {
                    for (const cFn in fn) {
                        const currentData = current.data.filter((dataItem: any)=> {
                            return dataItem[cFn];
                        }).map((dataItem: any)=> {
                            return dataItem[cFn];
                        });
                        if (currentData?.length) {
                            fn[cFn](currentData);
                        }
                    }
                }
            }
            current.data = [];
        };
    }, [fn]);

    return useCallback(function f(...args) {
        const throttle = createThrottle(current.fn, wait, throttleOptions(Object.assign({
            leading: true,
            type: 2,
        }, options, {
            notThrottle: (data: any) => {
                current.data.push(data);
                if (options.notThrottle) {
                    options.notThrottle(data);
                }
            },
            clearTimeout: (now: any)=> {
                current.timer = now;
            }
        })), current.timer);
        // @ts-ignore
        current.timer = throttle(...args);
    }, dep);
};

export default useThrottleAndMerge;