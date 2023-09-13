/**********************************************************************
 *
 * @模块名称: useFetch
 *
 * @模块用途: useFetch
 *
 * @创建人: pgli
 *
 * @date: 2022/2/17 13:29
 *
 **********************************************************************/
import React, { useState, useEffect, useRef } from 'react';
import { createFetch, MethodEnum } from "@gaopeng123/fetch";
import { CreateFetch, Method, Options } from "@gaopeng123/fetch/dist/typing";
import { isFunction } from "@gaopeng123/utils.types";

export type CheckResponse = (props: any) => any;
export type Deps = Array<any>;

let currentCreateFetch = createFetch;

enum triggerEnum {
    ctrl = 'ctrl',
    update = 'update',
    auto = 'auto'
}

export const initCreateFetch = (createFetch: CreateFetch)=> {
    currentCreateFetch = createFetch;
}

const useFetch = (url: string, options: Options & { trigger?: triggerEnum, method?: Method }, checkResponse?: CheckResponse, deps?: Deps) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<string | Error>('');
    const [loading, setLoading] = useState<boolean>(true);
    const [loaded, setLoaded] = useState<boolean>(false);
    const [runId, setRunId] = useState<number>();
    const [optionsDynamic, setOptionsDynamic] = useState(options);

    const send = () => {
        const abortController = options.abortController || new AbortController();
        currentCreateFetch(url, Object.assign({
            method: MethodEnum.get,
            abortController: abortController
        }, options)).then((res: any) => {
            setLoading(false);
            setData(checkResponse && isFunction(checkResponse) ? checkResponse(res) : res);
        }).catch((e: Error) => {
            setLoading(false);
            setError(e?.toString());
        });
        return () => {
            abortController?.abort();
        }
    }

    const afterEffect = () => {
        /**
         * 第一次不触发
         */
        if (options.trigger === 'update') {
            if (loaded) {
                return send();
            } else {
                setLoaded(true);
                return () => {

                }
            }
        } else
            if (options.trigger === 'ctrl') {
                if (runId) {
                    return send();
                } else {
                    return () => {

                    }
                }
            } else {
                return send();
            }
    }

    useEffect(() => {
        return afterEffect();
    }, [runId]);


    useEffect(() => {
        return afterEffect();
    }, [optionsDynamic]);

    useEffect(() => {
        if (JSON.stringify(optionsDynamic) !== JSON.stringify(options)) {
            setOptionsDynamic(options);
        }
    }, [options]);

    useEffect(() => {
        return afterEffect();
    }, deps || []);

    return [loading, error, data, {
        run: () => {
            setRunId(Date.now());
        }
    }];
}


export default useFetch;

export const useGet = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.get}, options), checkResponse, deps);
    return [loading, error, data];
}

export const usePost = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.post}, options), checkResponse, deps);
    return [loading, error, data];
}

export const usePut = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.put}, options), checkResponse, deps);
    return [loading, error, data];
}

export const useDel = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.del}, options), checkResponse, deps);
    return [loading, error, data];
}

export const usePatch = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.patch}, options), checkResponse, deps);
    return [loading, error, data];
}

export const useCtrlFetch = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useFetch(url, {
        trigger: triggerEnum.ctrl,
        ...options
    }, checkResponse, deps);
}

export const useCtrlGet = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useCtrlFetch(url, Object.assign({
        method: MethodEnum.get,
    }, options), checkResponse, deps);
}

export const useCtrlPost = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useCtrlFetch(url, Object.assign({
        method: MethodEnum.post,
    }, options), checkResponse, deps);
}

export const useCtrlPut = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useCtrlFetch(url, Object.assign({
        method: MethodEnum.put,
    }, options), checkResponse, deps);
}

export const useCtrlDel = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useCtrlFetch(url, Object.assign({
        method: MethodEnum.del,
    }, options), checkResponse, deps);
}

export const useCtrlPatch = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useCtrlFetch(url, Object.assign({
        method: MethodEnum.patch,
    }, options), checkResponse, deps);
}

export const useUpdateFetch = (url: string, options?: Options & { method?: Method }, checkResponse?: CheckResponse, deps?: Deps) => {
    const [loading, error, data] = useFetch(url, {
        trigger: triggerEnum.update,
        ...options
    }, checkResponse, deps);
    return [loading, error, data];
}

export const useUpdateGet = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useUpdateFetch(url, {
        method: MethodEnum.get,
        ...options
    }, checkResponse, deps);
}

export const useUpdatePost = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useUpdateFetch(url, Object.assign({
        method: MethodEnum.post,
    }, options), checkResponse, deps);
}

export const useUpdatePut = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useUpdateFetch(url, Object.assign({
        method: MethodEnum.put,
    }, options), checkResponse, deps);
}

export const useUpdateDel = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useUpdateFetch(url, Object.assign({
        method: MethodEnum.del,
    }, options), checkResponse, deps);
}

export const useUpdatePatch = (url: string, options?: Options, checkResponse?: CheckResponse, deps?: Deps) => {
    return useUpdateFetch(url, Object.assign({
        method: MethodEnum.patch,
    }, options), checkResponse, deps);
}

/**
 * 可中断fetch
 * @param method
 */
export const useCreateFetch = (method?: MethodEnum) => {
    const ctrRef = useRef<{ abortController?: AbortController }>({});
    const abort = () => {
        if (ctrRef.current.abortController) {
            ctrRef.current.abortController?.abort();
        }
    }
    const sent = (url: string, options?: Options) => {
        // 中断请求
        abort();
        const abortController = new AbortController();
        ctrRef.current.abortController = abortController;
        return currentCreateFetch(url, Object.assign({
            method: method || MethodEnum.get,
            abortController: abortController
        }, options));
    }
    useEffect(() => {
        return () => {
            abort();
        }
    }, []);

    return [{
        sent,
        abort
    }];
}

export const useGetFetch = () => {
    return useCreateFetch(MethodEnum.get);
}

export const usePostFetch = () => {
    return useCreateFetch(MethodEnum.post);
}

export const usePutFetch = () => {
    return useCreateFetch(MethodEnum.put);
}

export const useDelFetch = () => {
    return useCreateFetch(MethodEnum.del);
}

export const usePatchFetch = () => {
    return useCreateFetch(MethodEnum.patch);
}