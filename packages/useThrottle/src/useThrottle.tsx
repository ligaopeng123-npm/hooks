import {useCallback, useRef, useEffect} from "react";
import {createThrottle, throttleOptions} from "@gaopeng123/utils.function";
import type {ThrottleOptions} from "@gaopeng123/utils.function"

type Fn = (...props: any) => any;

export const useThrottle = (fn: Fn, wait: number = 200, options: ThrottleOptions<any[]> = {}, dep: any[] = []) => {
    const {current} = useRef<any>({fn, timer: 0});
    useEffect(function () {
        current.fn = fn;
    }, [fn]);

    return useCallback(function f(...args) {
        const throttle = createThrottle(current.fn, wait, throttleOptions(options), current.timer);
        // @ts-ignore
        current.timer = throttle(...args);
    }, dep);
}
