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
import useResize from "./useResize";
import {isElement} from "@gaopeng123/utils";

type ScaleProps = {
	scaleDom?: any; // 缩放的dom 如果不传 默认为body
	width?: number; // 理想宽
	height?: number; // 要求的理想宽高 小于或者大于该数据后进行缩放
};

const useScale = (props?: ScaleProps) => {
	const [scale, setScale] = useState({x: 1, y: 1});
	const {
		scaleDom,
		width, height,
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
		_scaleDom = isElement(_scaleDom) ? _scaleDom : document.querySelector('body');
		if (_scaleDom && scale.x && scale.y) {
			_scaleDom.style.transform = `scale(${scale.x}, ${scale.y})`;
			_scaleDom.style.width = `${width}px`;
			_scaleDom.style.height = `${height}px`;
			_scaleDom.style['transform-origin'] = `0px 0px`;
		}
	}, [scale]);
	return scale;
};

export default useScale;
