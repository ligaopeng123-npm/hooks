import React, { useState } from 'react';

export type PaginationProps = {
    total: number;
    pageNum?: number;
    pageSize?: number;
    onMax?: (current: number) => void;
    onMin?: (current: number) => void;
}
const usePagination = (props: PaginationProps): [number, () => void, () => void] => {
    const {pageNum, pageSize, total, onMax, onMin} = Object.assign({pageNum: 1, pageSize: 20}, props);
    const [current, setCurrent] = useState(pageNum);
    const next = () => {
        if (current * (pageSize + 1) < total) {
            setCurrent(current + 1);
        } else {
            onMax && onMax(current);
        }
    }

    const last = () => {
        if (current > 1) {
            setCurrent(current - 1);
        } else {
            onMin && onMin(current);
        }
    }
    return [current, next, last];
}


export default usePagination;
