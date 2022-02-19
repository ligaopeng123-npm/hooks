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
import React, {useState, useEffect} from 'react';
import {useGet, usePost, useDel, usePut, usePatch} from "../../packages/useFetch";

type TestUseFetchProps = {};
const itemStyle = {
    padding: '0 16px'
}
const TestUseFetch: React.FC<TestUseFetchProps> = (props) => {
    const [loading, error, data] = useGet('/assets/test.json', {}, (res) => {
        return res.data;
    });

    if (loading) {
        return (<span>loading</span>)
    }

    if (error) {
        return (<span>{error}</span>)
    }

    return (
        <React.Fragment>
            <h3>useGet</h3>
            <div style={{display: 'flex', width: 500}}>
                <div style={itemStyle}>loading: {loading}</div>
                <div style={itemStyle}>error: {error}</div>
                <div style={itemStyle}>data: {JSON.stringify(data, null, 2)}</div>
            </div>
            <h3>usePost</h3>
            <h3>useDel</h3>
            <h3>usePut</h3>
            <h3>usePatch</h3>
        </React.Fragment>
    )
};

export default TestUseFetch;
