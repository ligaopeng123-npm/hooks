/**********************************************************************
 *
 * @模块名称: useReloadAfterStationary
 *
 * @模块作用: useReloadAfterStationary
 *
 * @创建人: gaopeng123
 *
 * @date: 2023/1/6 2:09 下午
 *
 * @版权所有: gaopeng123
 *
 **********************************************************************/
import React, { useEffect } from  'react';
import { hasOperate, OperateConfig } from "@gaopeng123/utils.function";

const useReloadAfterStationary = (config: OperateConfig) => {
    useEffect(()=> {
        hasOperate(()=> {
            window.location.reload();
        }, config);
    }, []);
}

export default useReloadAfterStationary;