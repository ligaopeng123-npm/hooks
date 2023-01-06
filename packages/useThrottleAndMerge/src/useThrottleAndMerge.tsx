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
import React, { useEffect, useRef, useCallback } from 'react';
import { createThrottle, throttleOptions, ThrottleOptions } from "@gaopeng123/utils.function";

type Fn = (...props: any) => any;
const useThrottleAndMerge = (fn: Fn, wait: number = 200, options: ThrottleOptions = {}, dep: any[] = []) => {
    const {current} = useRef<any>({fn, timer: 0});
    useEffect(function () {
        current.data = [];
        current.timmer = [];
        current.fn = () => {
            current.timmer.forEach((itemTimmer: any) => {
                clearTimeout(itemTimmer);
            });
            if (current.data.length) {
                fn([...current.data]);
            }
            current.data = [];
        };
    }, [fn]);

    return useCallback(function f(...args) {
        const throttle = createThrottle(current.fn, wait, throttleOptions(Object.assign({
            leading: true,
            notThrottle: (data: any) => {
                current.data.push(data);
                current.timmer.push(setTimeout(() => {
                    if (current.data.length) {
                        fn([...current.data]);
                        current.data = [];
                    }
                }, wait));
            }
        }, options)), current.timer);
        // @ts-ignore
        current.timer = throttle(...args);
    }, dep);
};

export default useThrottleAndMerge;