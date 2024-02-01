import React, { useEffect, useState } from 'react';

export type PaginationProps = {
    total: number;
    pageNum?: number;
    pageSize?: number;
    onMax?: (current: number) => void;
    onMin?: (current: number) => void;
}
export const usePagination = (props: PaginationProps): [number, () => void, () => void, () => void] => {
    const {pageNum, pageSize, total, onMax, onMin} = Object.assign({pageNum: 1, pageSize: 20}, props);
    const [current, setCurrent] = useState(pageNum);

    useEffect(() => {
        setCurrent(pageNum);
    }, [total, pageNum]);

    const next = () => {
        // 条数足够 进入下一条
        if (current * pageSize < total) {
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

    const reset = () => {
        setCurrent(pageNum);
    }

    return [current, next, last, reset];
}
