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
import React, {useState} from 'react';

export type ZoomProps = {
    zoomDom?: any; // 缩放的dom 如果不传 默认为body
    max?: number; // 最大缩放倍数  默认0.5
    min?: number; // 最小缩放倍数  默认2
    onMax?: (zoom: number) => void; // 缩放到最大倍数时触发
    onMin?: (zoom: number) => void; // 缩放到最小倍数时触发
    defaultZoom?: number; // 默认缩放级别   默认1
    step?: number; // 每次缩放级别的值 默认0.25
};

const useZoom = (props?: ZoomProps): [number, () => void, () => void] => {
    const {zoomDom, max, min, step, defaultZoom, onMin, onMax} = Object.assign({
        max: 2,
        min: 0.5,
        step: 0.25,
        defaultZoom: 1
    }, props);
    const [zoom, setZoom] = useState(defaultZoom || 1);

    const getZoomDom = () => {
        if (zoomDom) {
            return zoomDom?.current ? zoomDom.current : zoomDom;
        }
        return document.body;
    }

    const setZoomVal = (zoom: number) => {
        getZoomDom().style.zoom = zoom;
    }

    const zoomUp = () => {
        if (zoom >= max) {
            if (onMax) onMax(zoom);
        } else {
            const newZoom = zoom + step;
            setZoom(newZoom);
            setZoomVal(newZoom);
        }
    }

    const zoomDown = () => {
        if (zoom <= min) {
            if (onMin) onMin(zoom);
        } else {
            const newZoom = zoom - step;
            setZoom(newZoom);
            setZoomVal(newZoom);
        }
    }
    return [zoom, zoomUp, zoomDown]
};

export default useZoom;
