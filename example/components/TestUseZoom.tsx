/**********************************************************************
 *
 * @模块名称: TestUseWorker
 *
 * @模块用途: TestUseWorker
 *
 * @创建人: pgli
 *
 * @date: 2022/3/11 16:13
 *
 **********************************************************************/
import React from 'react';
import {useZoom} from "../../packages/useZoom";

type TestUseZoomProps = {};
const TestUseZoom: React.FC<TestUseZoomProps> = (props) => {
    const [zoom, zoomUp, zoomDown] = useZoom({min: 0.25, max: 5, onMax: ()=> {
            console.log(111)
        }});
    return (
        <div style={{backgroundColor: '#97fa04', width: '100%', height: '100%'}}>
            <h3>useZoom</h3>
            <a onClick={() => zoomUp()}>放大</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a onClick={() => zoomDown()}>缩小</a><br/>
            zoom: {
                zoom
            }
        </div>
    )
};

export default TestUseZoom;
