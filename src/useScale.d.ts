declare type ScaleProps = {
    scaleDom?: any;
    width?: number;
    height?: number;
};
declare const useScale: (props?: ScaleProps | undefined) => {
    x: number;
    y: number;
};
export default useScale;
