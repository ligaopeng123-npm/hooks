/**********************************************************************
 *
 * @模块名称: TestUseBoolean
 *
 * @模块用途: TestUseBoolean
 *
 * @创建人: pgli
 *
 * @date: 2022/9/29 14:08
 *
 **********************************************************************/
import React from 'react';
import { useBoolean } from "../../packages/useBoolean";

type TestUseBooleanProps = {};
const TestUseBoolean: React.FC<TestUseBooleanProps> = (props) => {
    const [bool, {setTrue, setFalse, setBool, setAuto}] = useBoolean(false);
    return (
        <React.Fragment>
            <h3>useBoolean</h3>
            <button onClick={() => setTrue()}>true</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => setFalse()}>false</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => setBool(true)}>setBool</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => setAuto()}>setAuto</button><br/>
            bool: <span>{`${bool}`}</span>
        </React.Fragment>
    )
};

export default TestUseBoolean;
