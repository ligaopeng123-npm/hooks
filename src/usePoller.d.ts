export declare type PollerMark = {
    states: 'stop' | 'start' | number;
    props?: any;
    time: number;
    startStamp: number;
    currentStamp: number;
    endStamp: number;
};
export declare type PollerProps = {
    delay?: number;
    immediate?: boolean;
    callBack?: (date: PollerMark) => void;
    asyncCallBack?: (args: PollerMark) => Promise<any>;
};
declare const usePoller: (props: PollerProps) => [number, () => void, () => void];
export default usePoller;
