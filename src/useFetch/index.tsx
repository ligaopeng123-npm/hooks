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
import React, {useState, useEffect} from 'react';
import {createFetch, MethodEnum} from "@gaopeng123/fetch";
import {Options} from "@gaopeng123/fetch/dist/typing";
import {isFunction} from "@gaopeng123/utils";

export type CheckResponse = (props: any) => any;
const useFetch = (url: string, options: Options, checkResponse?: CheckResponse) => {
    const [data, setData] = useState<any>();
    const [error, setError] = useState<string | Error>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const abortController = options.abortController || new AbortController();
        createFetch(url, Object.assign({
            method: MethodEnum.get,
            abortController: abortController
        }, options)).then((res: any) => {
            setLoading(false);
            // @ts-ignore
            setData(isFunction(checkResponse) ? checkResponse(res) : res);
        }).catch((e: Error) => {
            setLoading(false);
            setError(e);
        });
        return () => {
            abortController.abort();
        }
    }, []);
    return [loading, error, data];
};

export default useFetch;

export const useGet = (url: string, options?: Options, checkResponse?: CheckResponse) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.get}, options));
    return [loading, error, data];
}

export const usePost = (url: string, options?: Options, checkResponse?: CheckResponse) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.post}, options));
    return [loading, error, data];
}

export const usePut = (url: string, options?: Options, checkResponse?: CheckResponse) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.put}, options));
    return [loading, error, data];
}

export const useDel = (url: string, options?: Options, checkResponse?: CheckResponse) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.del}, options));
    return [loading, error, data];
}

export const usePatch = (url: string, options?: Options, checkResponse?: CheckResponse) => {
    const [loading, error, data] = useFetch(url, Object.assign({method: MethodEnum.patch}, options));
    return [loading, error, data];
}
