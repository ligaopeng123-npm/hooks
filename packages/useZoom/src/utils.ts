/**********************************************************************
 *
 * @模块名称: utils
 *
 * @模块作用: utils
 *
 * @创建人: pgli
 *
 * @date: 2023/9/1 3:32 下午
 *
 * @版权所有: pgli
 *
 **********************************************************************/


/**
 * 获取样式
 * @param type
 * @param value
 */
export const setTransform = (zoomDom: HTMLElement, {
    type,
    value
}: { type: 'translate' | 'rotate' | 'scale', value: string | number }) => {
    const current = zoomDom.style.transform;
    if (current) {
        if (current.includes(type)) {
            return current.split(')').map((item: string) => {
                if (item.trim().startsWith(type)) {
                    const v = item.split('(');
                    v[1] = `${value}`;
                    return v.join('(');
                }
                return item;
            }).join(')');
        } else {
            return current + ` ${type}(${value}) `
        }
    } else {
        return `${type}(${value}) `
    }
}

export const getTransform = (zoomDom: any, { type }: { type: 'translate' | 'rotate' | 'scale' }) => {
    const current = zoomDom.style.transform;
    if (current) {
        if (current.includes(type)) {
            const arr = current.split(')');
            for (let i = 0; i < arr.length; i++) {
                const item = arr[i];
                if (item.trim().startsWith(type)) {
                    const v = item.split('(');
                    return v[1];
                }
            }
            return ''
        } else {
            return ''
        }
    } else {
        return ''
    }
}

export const getZoomDom = (zoomDom: any) => {
    if (zoomDom) {
        return zoomDom?.current ? zoomDom.current : zoomDom;
    }
    return document.body;
}