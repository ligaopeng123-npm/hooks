/**********************************************************************
 *
 * @模块名称: useAntdTableValueEnum
 *
 * @模块用途: useAntdTableValueEnum
 *
 * @创建人: wangxiangyu
 *
 * @date: 2024-05-23 15:43:12
 *
 **********************************************************************/
import React, { useState, useEffect } from 'react';
import { isUndefined } from "@gaopeng123/utils";

export type AntdTableValueEnumProps = {
    fieldNames?: { label?: string, value?: string },
    request: () => Promise<Array<any>>,
    enumCallBack?: <T>(v: T) => T;
    cacheKey?: string;
};
const cache: any = {};
const useAntdTableValueEnum: (props: AntdTableValueEnumProps) => { list: Array<any>; valueEnum: any } = (props) => {
    const { label, value } = Object.assign({ label: 'label', value: 'value' }, props.fieldNames)
    const [opt, setOpts] = useState({ list: [], valueEnum: {} });
    useEffect(() => {
        if (props.cacheKey && !isUndefined(cache[props.cacheKey])) {
            setOpts(cache[props.cacheKey]);
        } else {
            props.request().then((res) => {
                const _list: any = [];
                const _enum: any = {};
                res.forEach((item) => {
                    _list.push({
                        label: item[label],
                        value: item[value],
                        ...item,
                    });
                    if (props.enumCallBack) {
                        _enum[item[value]] = {
                            text: item[label],
                            ...props.enumCallBack(item)
                        }
                    } else {
                        _enum[item[value]] = {
                            text: item[label],
                        }
                    }
                });
                const _opt = {
                    list: _list,
                    valueEnum: _enum
                }
                if (props.cacheKey) {
                    cache[props.cacheKey] = _opt;
                }
                setOpts(_opt);
            }).catch(() => {

            })
        }
    }, []);
    return opt;
}

export default useAntdTableValueEnum;
