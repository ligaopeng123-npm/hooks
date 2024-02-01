/**********************************************************************
 *
 * @模块名称: useScale
 *
 * @模块用途: useScale
 *
 * @创建人: pgli
 *
 * @date: 2021/10/27 7:53
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {useResize} from "@gaopeng123/hooks.use-resize";
import {isElement} from "@gaopeng123/utils.types";

export type ScaleProps = {
    scaleDom?: any; // 缩放的dom 如果不传 默认为body
    width?: number; // 理想宽
    height?: number; // 要求的理想宽高 小于或者大于该数据后进行缩放
};

export const useScale = (props?: ScaleProps) => {
    const [scale, setScale] = useState({x: 1, y: 1});
    const {
        scaleDom,
        width,
        height,
    } = Object.assign({width: 1920, height: 1080}, props);

    const {availWidth, availHeight} = useResize();

    useEffect(() => {
        setScale({x: availWidth / width, y: availHeight / height});
    }, [scaleDom, availWidth, availHeight, width, height]);

    useEffect(() => {
        let _scaleDom;
        if (scaleDom) {
            _scaleDom = scaleDom?.current || scaleDom;
        }
        // 获取当前需要缩放的dom 如果没有默认为body
        _scaleDom = isElement(_scaleDom) ? _scaleDom : document.querySelector('div');
        // 获取浏览器的可用宽高
        const {clientWidth, clientHeight} = document.documentElement;
        // 获取当前屏幕的真是比例
        const clientRatio = clientWidth / clientHeight
        // 计算默认的比例
        const designRatio = width / height;
        let scaleValue = clientWidth / width;
        // 根据宽高比例来计算合适的缩放数据
        if (clientRatio > designRatio) {
            scaleValue = clientHeight / height
        }
        const scaleDomStyle: any = _scaleDom.style;
        scaleDomStyle.transformOrigin = 'left top';
        scaleDomStyle.transform = `scale(${scaleValue}) translate(-50%, -50%)`;
        scaleDomStyle.width = `${width}px`;
        scaleDomStyle.height = `${height}px`;
        scaleDomStyle.position = `absolute`;
        scaleDomStyle.top = `50%`;
        scaleDomStyle.left = `50%`;
    }, [scale]);
    return scale;
};
