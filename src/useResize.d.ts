import { WindowSize } from "@gaopeng123/utils";
export declare type ResizeProps = {
    wait?: number;
};
declare const useResize: (props?: ResizeProps | undefined) => WindowSize;
export default useResize;
