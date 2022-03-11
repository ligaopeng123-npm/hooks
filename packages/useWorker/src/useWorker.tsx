/**********************************************************************
 *
 * @模块名称: useWorker
 *
 * @模块用途: useWorker
 *
 * @创建人: pgli
 *
 * @date: 2022/3/10 13:44
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';

export type UseWorkerProps = {
    worker: Worker;
    params?: any
};
const useWorker: React.FC<UseWorkerProps> = (props) => {
    const {worker, params} = props;
    const [workerEvent, setWorkerEvent] = useState<any>(null);
    useEffect(() => {
        const onMessage = (event: any) => {
            setWorkerEvent(event);
        }
        if (worker) {
            worker.postMessage(params);
            worker.addEventListener('message', onMessage);
        }
        return () => {
            worker?.removeEventListener('message', onMessage)
        }
    }, [worker, params]);
    return workerEvent;
};

export default useWorker;
