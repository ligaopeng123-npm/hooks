/**********************************************************************
 *
 * @模块名称: useResize
 *
 * @模块用途: useResize  屏幕变化监听
 *
 * @date: 2021/8/26 18:53
 *
 * @版权所有: pgli
 *
 **********************************************************************/
import {useEffect, useState} from 'react';
import {debounce, windowSize, WindowSize} from "@gaopeng123/utils";

export type ResizeProps = {
    wait?: number; // 等待时间
}

const useResize = (props?: ResizeProps) => {
    const [size, setSize] = useState(windowSize());
    useEffect(() => {
        const onResize = debounce(() => {
            setSize(windowSize());
        }, props?.wait || 200, {leading: false});
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        }
    }, []);
    return size as WindowSize;
};

export default useResize;
