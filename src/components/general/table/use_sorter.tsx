import { ColumnType } from "antd/es/table";
import React from "react";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";

type Props = {};

const useSorter = () => {
  const { search } = useLocation();
  const qs = parse(search) as any;

  const getColumnSortProps = (dataIndex: string): ColumnType<any> => {
    let sortProps: ColumnType<any> = {
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
    };

    if (
      dataIndex == qs?.sort &&
      qs?.order &&
      ["descend", "ascend"].includes(qs?.order)
    ) {
      sortProps = { ...sortProps, sortOrder: qs?.order };
    }

    return sortProps;
  };

  return getColumnSortProps;
};

export default useSorter;
