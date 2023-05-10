/**********************************************************************
 *
 * @模块名称: TestUseFetch
 *
 * @模块用途: TestUseFetch
 *
 * @创建人: pgli
 *
 * @date: 2022/2/18 9:22
 *
 **********************************************************************/
import React, {
    useState,
} from 'react';
import {
    useGet,
    usePost,
    useDel,
    usePut,
    usePatch
} from "../../packages/useFetch";
import {
    useCtrlGet,
    useUpdateGet
} from "../../packages/useFetch/src";

type TestUseFetchProps = {};
const itemStyle = {
    padding: '0 16px'
}
const TestUseFetch: React.FC<TestUseFetchProps> = (props) => {
    const [dep1, setDep1] = useState(1);
    const [dep2, setDep2] = useState(2);
    const [loading, error, data] = useGet('/assets/test.json', {}, (res) => {
        return res.data;
    }, [dep1]);

    const onClick = () => {
        setDep1(Math.random())
    }

    const [loading1, error1, data1] = useUpdateGet('/assets/test.json', {params: {dep: dep2}}, (res) => {
        return res.data;
    });

    const [loading2, error2, data2, {run}] = useCtrlGet('/assets/test.json', {}, (res) => {
        return res.data;
    });

    if (loading) {
        return (
            <span>loading</span>)
    }

    if (error) {
        return (
            <span>{error}</span>)
    }

    return (
        <React.Fragment>
            <h3 onClick={onClick}>useGet</h3>
            <div
                style={{
                    display: 'flex',
                    width: 500
                }}>
                <div
                    style={itemStyle}>loading: {loading}</div>
                <div
                    style={itemStyle}>error: {error}</div>
                <div
                    style={itemStyle}>data: {JSON.stringify(data, null, 2)}</div>
            </div>
            <h3 onClick={() => {
                setDep2(Math.random())
                setTimeout(() => {
                    setDep2(Math.random());
                }, 5)
            }
            }>useUpdateGet</h3>
            <div
                style={{
                    display: 'flex',
                    width: 500
                }}>
                <div
                    style={itemStyle}>loading: {loading1}</div>
                <div
                    style={itemStyle}>error: {error1}</div>
                <div
                    style={itemStyle}>data: {JSON.stringify(data1, null, 2)}</div>
            </div>
            <h3 onClick={run}>useCtrlGet</h3>
            <div
                style={{
                    display: 'flex',
                    width: 500
                }}>
                <div
                    style={itemStyle}>loading: {loading2}</div>
                <div
                    style={itemStyle}>error: {error2}</div>
                <div
                    style={itemStyle}>data: {JSON.stringify(data2, null, 2)}</div>
            </div>
        </React.Fragment>
    )
};

export default TestUseFetch;
