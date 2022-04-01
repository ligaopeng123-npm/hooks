import { useCallback, useRef, useEffect } from "react";

type Fn = (...props: any) => any;
type Delay = number;
type Dep = any[];
export const useDebounce = (fn: Fn, delay: Delay = 200, dep: Dep = []) => {
    const {current} = useRef<any>({fn, timer: null});
    useEffect(function () {
        current.fn = fn;
    }, [fn]);

    return useCallback(function f(...args) {
        if (current.timer) {
            clearTimeout(current.timer);
        }
        current.timer = setTimeout(() => {
            // @ts-ignore
            current.fn.call(this, ...args);
        }, delay);
    }, dep)
}