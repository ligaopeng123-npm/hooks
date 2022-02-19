/**********************************************************************
 *
 * @模块名称: TestUseClock
 *
 * @模块用途: TestUseClock
 *
 * @创建人: pgli
 *
 * @date: 2021/10/29 9:19
 *
 **********************************************************************/
import React, {useEffect} from 'react';
import {useScale} from "../../packages/useScale";

type TestUseScaleProps = {};
const TestUseScale: React.FC<TestUseScaleProps> = (props) => {
    const scale = useScale({width: 1920, height: 1080});
    useEffect(() => {
        return () => {
            // @ts-ignore
            const body = document.querySelector('body');
            if (body) {
                body.style.transform = `scale(${1}, ${1})`;
            }
        }
    }, []);
    return (
        <React.Fragment>
            <h3>useScale</h3>
            scale: {
            JSON.stringify(scale, null, 2)
        }
        </React.Fragment>
    )
};

export default TestUseScale;
