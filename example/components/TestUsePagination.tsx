/**********************************************************************
 *
 * @模块名称: TestUsePagination
 *
 * @模块用途: TestUsePagination
 *
 * @创建人: pgli
 *
 * @date: 2022/8/31 16:13
 *
 **********************************************************************/
import React from 'react';
import { usePagination } from "../../packages/usePagination";

type TestUsePaginationProps = {};
const TestUsePagination: React.FC<TestUsePaginationProps> = (props) => {
    const [current, next, last] = usePagination({pageNum: 1, pageSize: 10, total: 301});
    return (
        <div style={{backgroundColor: '#97fa04', width: '100%', height: '100%'}}>
            <h3>usePagination</h3>
            <a onClick={() => next()}>下一页</a>&nbsp;&nbsp;&nbsp;&nbsp;
            <a onClick={() => last()}>上一页</a><br/>
            current: {
            current
        }
        </div>
    )
};

export default TestUsePagination;
