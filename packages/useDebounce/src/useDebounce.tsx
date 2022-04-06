import {useCallback, useEffect, useRef} from "react";
import {createDebounce} from "@gaopeng123/utils.function";
import type {DebounceOptions} from "@gaopeng123/utils.function";

type Fn = (...props: any) => any;
type Dep = any[];
// 去抖 借助useRef
export const useDebounce = (fn: Fn, wait = 200, options: DebounceOptions = {}, dep: Dep = []) => {
    const {current} = useRef<any>({fn, timer: null});
    useEffect(function () {
        current.fn = fn;
    }, [fn]);

    return useCallback(function f(...args: any) {
        const debounce = createDebounce(current.fn, wait, options, current.timer);
        // @ts-ignore
        current.timer = debounce(...args)
    }, dep);
}
