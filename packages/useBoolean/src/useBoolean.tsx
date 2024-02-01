/**********************************************************************
 *
 * @模块名称: useBoolean
 *
 * @模块用途: useBoolean
 *
 * @创建人: pgli
 *
 * @date: 2022/9/29 14:00
 *
 **********************************************************************/
import React, { useState, useMemo } from 'react';

type ActionsFn = () => void;
type ActionsSetFn = (val: boolean) => void;
export type Actions = {
    setTrue: ActionsFn, // 设置true
    setFalse: ActionsFn, // 设置false
    setAuto: ActionsFn, // 如果当前为true 设置为false 如果为false则为true
    setBool: ActionsSetFn // 根据传递的值设置
};
export type BooleanBack = [boolean, Actions];
export const useBoolean = (_bool: boolean = false): BooleanBack => {
    const [bool, setBool] = useState(_bool);
    const actions = useMemo(() => {
        return {
            setTrue: () => setBool(true),
            setFalse: () => setBool(false),
            setBool: (val: boolean) => setBool(val),
            setAuto: () => setBool((s) => (s === _bool ? !_bool : _bool)),
        }
    }, []);

    return [bool, actions]
};