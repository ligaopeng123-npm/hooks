/**********************************************************************
 *
 * @模块名称: useEffectStrictMode
 *
 * @模块用途: useEffectStrictMode
 *
 * @创建人: wangxiangyu
 *
 * @date: 2023-08-10 09:39:28
 *
 **********************************************************************/
import React, { DependencyList, EffectCallback, useEffect, useRef } from 'react';

export const useEffectOnceInStrictMode = (effect: EffectCallback, deps: DependencyList) => {
    const loadRef = useRef(process.env.NODE_ENV === 'development');
    useEffect(parseInt(React.version) > 17 ? () => {
        if (loadRef.current) {
            loadRef.current = false;
            return
        }
        return effect();
    } : effect, deps);
};