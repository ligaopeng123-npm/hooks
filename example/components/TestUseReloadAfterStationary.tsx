/**********************************************************************
 *
 * @模块名称: TestUseReloadAfterStationary
 *
 * @模块作用: TestUseReloadAfterStationary
 *
 * @创建人: gaopeng123
 *
 * @date: 2023/1/6 4:46 下午
 *
 * @版权所有: gaopeng123
 *
 **********************************************************************/
import React from 'react';
import { useReloadAfterStationary } from "../../packages/useReloadAfterStationary";

type TestUseReloadAfterStationaryProps = {};
const TestUseReloadAfterStationary: React.FC<TestUseReloadAfterStationaryProps> = (props) => {
    useReloadAfterStationary({wait: 5000, interval: 1000});
    return (
        <React.Fragment>
            {new  Date().toString()}
        </React.Fragment>
    )
}

export default TestUseReloadAfterStationary;