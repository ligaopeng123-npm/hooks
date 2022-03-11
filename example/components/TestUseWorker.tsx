/**********************************************************************
 *
 * @模块名称: TestUseWorker
 *
 * @模块用途: TestUseWorker
 *
 * @创建人: pgli
 *
 * @date: 2022/3/11 16:13
 *
 **********************************************************************/
import React from 'react';
import {useWorker} from "../../packages/useWorker";

const worker = new Worker(new URL('./test.worker.ts', import.meta.url));
type TestUseWorkerProps = {};
const TestUseWorker: React.FC<TestUseWorkerProps> = (props) => {
    const workerData: any = useWorker({worker, params: '1'});
    return (
        <React.Fragment>
            {
                workerData?.data
            }
        </React.Fragment>
    )
};

export default TestUseWorker;
