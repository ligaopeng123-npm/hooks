/**********************************************************************
 *
 * @模块名称: useZoomAndDrag
 *
 * @模块作用: 放大缩小 拖拽移动
 *
 * @创建人: pgli
 *
 * @date: 2023/9/1 2:57 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import React, { useEffect, useRef } from 'react';
import useZoom, { ZoomCallBack, ZoomProps } from "./useZoom";
import { getTransform, getZoomDom, setTransform } from "./utils";

const useZoomAndDrag = (props: ZoomProps): [number, ZoomCallBack] => {
    const [zoom, { zoomUp, zoomDown, zoomReset }] = useZoom(props);
    const zoomRef = useRef<{ _type?: 'in' | 'out' | null, drag?: { x: number, y: number } }>({ _type: null });
    useEffect(() => {
        const mouseenter = () => {
            zoomRef.current._type = 'in';
        }
        const mouseleave = () => {
            zoomRef.current._type = 'out';
        }

        const mousedown = (event: MouseEvent) => {
            const currentZoomDom = getZoomDom(props.zoomDom);
            const oldVal = getTransform(currentZoomDom, { type: 'translate' });
            let x = event.clientX;
            let y = event.clientY;
            if (oldVal) {
                const oldValArr = oldVal.split(',')
                x = x - parseInt(oldValArr[0]);
                y = y - parseInt(oldValArr[1]);
            }
            zoomRef.current.drag = { x: x, y: y };
            document.body.style.userSelect = 'none';
        }

        const mouseup = () => {
            zoomRef.current.drag = undefined;
            document.body.style.userSelect = 'auto';
        }

        const mousemove = (event: MouseEvent) => {
            if (zoomRef.current.drag) {
                const { clientX, clientY } = event;
                const { x, y } = zoomRef.current.drag;
                const dragX = clientX - x;
                const dragY = clientY - y;
                const currentZoomDom = getZoomDom(props.zoomDom);
                currentZoomDom.style.transform = setTransform(currentZoomDom, {
                    type: 'translate',
                    value: `${dragX}px, ${dragY}px`
                });
            }
        }

        // 鼠标滚动处理
        const mousewheel = (event: any) => {
            if (zoomRef.current._type === 'in') {
                const step = event.wheelDelta / 5000;
                step > 0 ? zoomUp(step) : zoomDown(-step);
            }
        }
        const zoom = getZoomDom(props.zoomDom);
        zoom.addEventListener('mouseenter', mouseenter);
        zoom.addEventListener('mouseleave', mouseleave);
        zoom.addEventListener('mousedown', mousedown);

        document.body.addEventListener('mouseup', mouseup);
        document.body.addEventListener('mousemove', mousemove);
        window.addEventListener('mousewheel', mousewheel);

        return () => {
            zoom.removeEventListener('mouseenter', mouseenter);
            zoom.removeEventListener('mouseleave', mouseleave);
            zoom.removeEventListener('mousedown', mousedown);

            window.removeEventListener('mousewheel', mousewheel);
            document.body.removeEventListener('mouseup', mouseup);
            document.body.removeEventListener('mousemove', mousemove);
        }
    }, []);

    return [zoom, {
        zoomUp,
        zoomDown,
        zoomReset: () => {
            const currentZoomDom = getZoomDom(props.zoomDom);
            currentZoomDom.style.transform = '';
            zoomReset();
        },
    }]
}

export default useZoomAndDrag;