/**********************************************************************
 *
 * @模块名称: TestUseThrottle
 *
 * @模块用途: TestUseThrottle
 *
 * @创建人: pgli
 *
 * @date: 2022/4/3 11:31
 *
 **********************************************************************/
import React, {useState, useEffect} from 'react';
import {useThrottle} from "@gaopeng123/hooks.use-throttle";

type TestUseThrottleProps = {};
const TestUseThrottle: React.FC<TestUseThrottleProps> = (props) => {
    const [v, setV] = useState('');
    const onChange = useThrottle((v: any) => {
        setV(v.target.value);
    }, 500);
    return (
        <React.Fragment>
            <input onChange={onChange}/>
            <br></br>输入值: {v}
        </React.Fragment>
    )
};

export default TestUseThrottle;
