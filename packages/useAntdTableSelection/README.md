# useAntdTableSelection

>antd表格处理多选逻辑
>
>[在线demo](http://localhost:6007/?path=/story/example-useantdtableselection--demo)

## Usage

```tsx
const [{selectedRows, selectedRowKeys, rowSelection}, {clearSelected}] = useAntdSelection({idKey: 'userId', defaultSelectedRowKeys: []});
return (
  <ProTable<TableListItem>
            actionRef={ref}
            columns={columns}
            // @ts-ignore
            rowSelection={rowSelection}
    ...
    />
);
```

