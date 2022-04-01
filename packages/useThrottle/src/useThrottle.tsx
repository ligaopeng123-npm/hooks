import { useCallback, useRef, useEffect } from "react";

type Fn = (...props: any) => any;
type Delay = number;
type Dep = any[];


export const useThrottle = (fn: Fn, delay: Delay = 200, dep: Dep = []) => {
    const {current} = useRef<any>({fn, timer: null});
    useEffect(function () {
        current.fn = fn;
    }, [fn]);

    return useCallback(function f(...args) {
        if (!current.timer) {
            current.timer = setTimeout(() => {
                delete current.timer;
            }, delay);
            // @ts-ignore
            current.fn.call(this, ...args);
        }
    }, dep);
}