/** ********************************************************************
 *
 * @模块名称: hooks
 *
 * @模块用途: hooks
 *
 * @date: 2022/2/19 10:40
 *
 * @版权所有: pgli
 *
 ********************************************************************* */
export { useClock } from "@gaopeng123/hooks.use-clock";
export type { ClockDate } from "@gaopeng123/hooks.use-clock";
export { useEasing, easingFuncs } from "@gaopeng123/hooks.use-easing";
export type { EasingType, UseEasingProps, Easing } from "@gaopeng123/hooks.use-easing";
export {
    initCreateFetch,
    useFetch,
    useGet,
    usePost,
    useDel,
    usePut,
    usePatch,

    useCreateFetch,
    useGetFetch,
    usePostFetch,
    usePutFetch,
    useDelFetch,
    usePatchFetch,

    useUpdateFetch,
    useUpdateGet,
    useUpdatePost,
    useUpdatePatch,
    useUpdatePut,
    useUpdateDel,

    useCtrlFetch,
    useCtrlGet,
    useCtrlPost,
    useCtrlPatch,
    useCtrlPut,
    useCtrlDel,
} from "@gaopeng123/hooks.use-fetch";
export { useMergeValue } from "@gaopeng123/hooks.use-merge-value";
export { usePoller } from "@gaopeng123/hooks.use-poller";
export type { PollerMark, PollerProps } from "@gaopeng123/hooks.use-poller";
export { useResize } from "@gaopeng123/hooks.use-resize";
export type { ResizeProps } from "@gaopeng123/hooks.use-resize";
export { useScale } from "@gaopeng123/hooks.use-scale";
export type { ScaleProps } from "@gaopeng123/hooks.use-scale";
export { useZoom, useZoomAndDrag, ZoomProps } from "@gaopeng123/hooks.use-zoom";
export { useWorker } from "@gaopeng123/hooks.use-worker";
export type { UseWorkerProps } from "@gaopeng123/hooks.use-worker";
export { useDebounce } from "@gaopeng123/hooks.use-debounce";
export type { DebounceOptions } from "@gaopeng123/hooks.use-debounce";
export { useThrottle } from "@gaopeng123/hooks.use-throttle";
export { useThrottleAndMerge } from "@gaopeng123/hooks.use-throttle-and-merge";
export type { ThrottleOptions } from "@gaopeng123/hooks.use-throttle";
export { usePagination } from "@gaopeng123/hooks.use-pagination";
export type { PaginationProps } from "@gaopeng123/hooks.use-pagination";
export { useVisibility } from "@gaopeng123/hooks.use-visibility";
export type { VisibilityProps } from "@gaopeng123/hooks.use-visibility";
export { useBoolean } from "@gaopeng123/hooks.use-boolean";
export type { BooleanBack } from "@gaopeng123/hooks.use-boolean";
export { useReloadAfterStationary } from "@gaopeng123/hooks.use-reload-after-stationary";
export type { OperateConfig } from "@gaopeng123/hooks.use-reload-after-stationary"

export { useAntdTableSelection } from "@gaopeng123/hooks.use-antd-table-selection";
export type { useAntdTableSelectionProps } from "@gaopeng123/hooks.use-antd-table-selection";
export { useAntdTableValueEnum } from "@gaopeng123/hooks.use-antd-table-value-enum";
export type { AntdTableValueEnumProps } from "@gaopeng123/hooks.use-antd-table-value-enum";

export { useEffectOnceInStrictMode } from "@gaopeng123/hooks.use-effect-once-in-strict-mode";
