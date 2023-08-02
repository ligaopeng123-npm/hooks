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
import React, { useState } from 'react';

export type useAntdTableSelectionProps = {
    idKey: string
};
const useAntdTableSelection = (props: useAntdTableSelectionProps) => {
    const {idKey} = props;
    const [selectedRows, setSelectedRows] = useState<Array<any>>([]);
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: any) => {
            setSelectedRows(selectedRows);
        },
        getCheckboxProps: (record: any) => ({
            name: record[idKey],
        }),
        selectedRowKeys: selectedRows?.map((item: any) => {
            return item[idKey]
        })
    };
    return [{selectedRows, rowSelection}, {clearSelected: () => setSelectedRows([])}]
}

export default useAntdTableSelection;
