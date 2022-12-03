import { Button, Input, Space, Table } from "antd";
import type { ColumnType, ColumnsType } from "antd/es/table";
import React, { useRef, useState } from "react";

import type { FilterConfirmProps } from "antd/es/table/interface";
import type { InputRef } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import useColumnSearchProps from "@/components/general/table/use_column_search_props";
import { useConvertTableFilterRoQuesyString } from "@/utils/convertTableFilterRoQuesyString";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Joe Black",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Jim Green",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
  {
    key: "4",
    name: "Jim Red",
    age: 32,
    address: "London No. 2 Lake Park",
  },
];

const App: React.FC = () => {
  const getColumnSearchProps = useColumnSearchProps();

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      width: "30%",
      ...getColumnSearchProps("name"),

    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "20%",
      ...getColumnSearchProps("age"),
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      ...getColumnSearchProps("address"),
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
  ];

  const { tableParamsToQsConvertor } = useConvertTableFilterRoQuesyString();

  const handleTableChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue>,
    sorter: SorterResult<DataType>
  ) => {
    tableParamsToQsConvertor(pagination, filters, sorter);
  };

  return (
    <Table columns={columns} dataSource={data} onChange={handleTableChange} />
  );
};

export default App;
