/**********************************************************************
 *
 * @模块名称: useAntdTableSelection
 *
 * @模块用途: useAntdTableSelection
 *
 * @创建人: wangxiangyu
 *
 * @date: 2023-08-02 08:29:46
 *
 **********************************************************************/
import React, { useEffect, useState } from 'react';

export type useAntdTableSelectionProps = {
    idKey: string,
    defaultSelectedRowKeys?: React.Key[]
};
export const useAntdTableSelection = (props: useAntdTableSelectionProps) => {
    const { idKey, defaultSelectedRowKeys } = props;
    const [selectedRows, setSelectedRows] = useState<Array<any>>([]);
    const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>();
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
            setSelectedRows(selectedRows);
            setSelectedRowKeys(selectedRows?.map((item: any) => {
                return item[idKey]
            }));
        },
        getCheckboxProps: (record: any) => ({
            name: record[idKey],
        }),
        selectedRowKeys: selectedRowKeys
    };
    useEffect(() => {
        if (defaultSelectedRowKeys && defaultSelectedRowKeys.length > 0) {
            setSelectedRowKeys(defaultSelectedRowKeys);
        }
    }, [defaultSelectedRowKeys]);
    return [{ selectedRows, selectedRowKeys, rowSelection }, { clearSelected: () => setSelectedRows([]) }]
}