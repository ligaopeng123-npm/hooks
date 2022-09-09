import React, { useEffect, useState } from 'react';

export type PaginationProps = {
    total: number;
    pageNum?: number;
    pageSize?: number;
    onMax?: (current: number) => void;
    onMin?: (current: number) => void;
}
const usePagination = (props: PaginationProps): [number, () => void, () => void, () => void] => {
    const {pageNum, pageSize, total, onMax, onMin} = Object.assign({pageNum: 1, pageSize: 20}, props);
    const [current, setCurrent] = useState(pageNum);

    useEffect(() => {
        setCurrent(pageNum);
    }, [total, pageNum]);

    const next = () => {
        if ((current + 1) * pageSize <= total) {
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

export default usePagination;
