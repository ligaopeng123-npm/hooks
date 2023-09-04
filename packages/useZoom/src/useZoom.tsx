/**********************************************************************
 *
 * @模块名称: useZoom
 *
 * @模块用途: useZoom
 *
 * @创建人: pgli
 *
 * @date: 2022/08/30 7:53
 *
 **********************************************************************/
import React, { useRef, useState } from 'react';
import { getZoomDom, setTransform } from "./utils";

export interface ZoomProps {
    zoomDom?: any; // 缩放的dom 如果不传 默认为body
    max?: number; // 最大缩放倍数  默认0.5
    min?: number; // 最小缩放倍数  默认2
    onMax?: (zoom: number) => void; // 缩放到最大倍数时触发
    onMin?: (zoom: number) => void; // 缩放到最小倍数时触发
    defaultZoom?: number; // 默认缩放级别   默认1
    step?: number; // 每次缩放级别的值 默认0.25
}

export interface ZoomCallBack {
    zoomUp: (step?: number) => void,
    zoomDown: (step?: number) => void,
    zoomReset: () => void,
}

const useZoom = (props?: ZoomProps): [number, ZoomCallBack] => {
    const { zoomDom, max, min, step, defaultZoom, onMin, onMax } = Object.assign({
        max: 2,
        min: 0.5,
        step: 0.25,
        defaultZoom: 1
    }, props);

    const [zoom, setZoom] = useState(defaultZoom);

    const dataRef = useRef({ zoom: defaultZoom });

    const setZoomVal = (zoom: number) => {
        dataRef.current.zoom = zoom;
        const currentZoomDom = getZoomDom(zoomDom);
        currentZoomDom.style.transform = setTransform(currentZoomDom, { type: 'scale', value: zoom });
    }

    const zoomUp = (_step?: number) => {
        const zoom = dataRef.current.zoom;
        if (zoom >= max) {
            if (onMax) onMax(zoom);
        } else {
            const _newZoom = zoom + (_step || step);
            const newZoom = _newZoom > max ? max : _newZoom;
            setZoom(newZoom);
            setZoomVal(newZoom);
        }
    }

    const zoomDown = (_step?: number) => {
        const zoom = dataRef.current.zoom;
        if (zoom <= min) {
            if (onMin) onMin(zoom);
        } else {
            const _newZoom = zoom - (_step || step);
            const newZoom = _newZoom < min ? min : _newZoom;
            setZoom(newZoom);
            setZoomVal(newZoom);
        }
    }

    return [zoom, {
        zoomUp, zoomDown, zoomReset: () => {
            setZoomVal(defaultZoom);
        }
    }]
};

export default useZoom;
