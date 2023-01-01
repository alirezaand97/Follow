import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from "antd/es/table/interface";
import { Table, TablePaginationConfig, TableProps } from "antd";

import ArrowRight from "@/components/icons/arrow_right";
import { parse } from "query-string";
import { useConvertTableFilterRoQuesyString } from "@/utils/convertTableFilterRoQuesyString";
import { useLocation } from "react-router-dom";

interface Props<T> extends TableProps<T> {
  handleTableChange?: () => void;
}

const ITable = <T extends object>({
  columns,
  pagination,
  ...props
}: Props<T>) => {
  const { search } = useLocation();
  const { page = 1 } = parse(search) as { page: string };
  const { tableParamsToQsConvertor } = useConvertTableFilterRoQuesyString();

  const onChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
    extra: TableCurrentDataSource<T>
  ) => {
    tableParamsToQsConvertor(pagination, filters, sorter, extra);
    props.handleTableChange && props.handleTableChange();
  };

  return (
    <Table<T>
      showSorterTooltip={false}
      columns={columns}
      pagination={{
        showQuickJumper: true,
        defaultCurrent: +page,
        showLessItems: true,
        nextIcon: <ArrowRight className="rotate-180 w-5" />,
        prevIcon: <ArrowRight className="w-5" />,
        className: "itable-pagination",
        position: ["bottomRight"],
        ...pagination,
      }}
      onChange={onChange}
      {...props}
    />
  );
};

export default ITable;
