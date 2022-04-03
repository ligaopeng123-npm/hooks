/**********************************************************************
 *
 * @模块名称: TestUseDebounce
 *
 * @模块用途: TestUseDebounce
 *
 * @创建人: pgli
 *
 * @date: 2022/4/3 10:12
 *
 **********************************************************************/
import React, {useState} from 'react';
import {useDebounce} from "../../packages/useDebounce";

type TestUseDebounceProps = {};
const TestUseDebounce: React.FC<TestUseDebounceProps> = (props) => {
    const [v, setV] = useState('');
    const onChange = useDebounce((v: any) => {
        setV(v.target.value);
    })
    return (
        <React.Fragment>
            <input onChange={onChange}/>
            <br></br>输入值: {v}
        </React.Fragment>
    )
};

export default TestUseDebounce;
