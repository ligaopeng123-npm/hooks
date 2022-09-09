/**********************************************************************
 *
 * @模块名称: useVisibility
 *
 * @模块用途: useVisibility
 *
 * @创建人: pgli
 *
 * @date: 2022/9/9 16:25
 *
 **********************************************************************/
import React from 'react';
import { useVisibility } from "../../packages/useVisibility";

type TestUseVisibilityProps = {};
const TestUseVisibility: React.FC<TestUseVisibilityProps> = (props) => {
    const visibility = useVisibility({
        wait: 500,
        onVisibilitychange: (v) => {
            console.log(visibility, v);
        }
    });
    return (
        <div style={{backgroundColor: '#97fa04', width: '100%', height: '100%'}}>
            <h3>useVisibility</h3>
            visibility: {`${visibility}`}
        </div>
    )
};

export default TestUseVisibility;
