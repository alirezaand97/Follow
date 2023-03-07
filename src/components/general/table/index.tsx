import {
  FilterValue,
  SorterResult,
  TableCurrentDataSource,
} from "antd/es/table/interface";
import { Table, TablePaginationConfig, TableProps } from "antd";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import ArrowRight from "@/components/icons/arrow_right";
import { useConvertTableFilterRoQuesyString } from "@/utils/convertTableFilterRoQuesyString";

interface Props<T> extends TableProps<T> {
  handleTableChange?: () => void;
  currentPage?: number;
}

const ITable = <T extends object>({
  columns,
  pagination,
  ...props
}: Props<T>) => {
  const { search, pathname } = useLocation();
  let { page = 1, ...qs } = parse(search) as { page: string };
  const { tableParamsToQsConvertor } = useConvertTableFilterRoQuesyString();

  const navigate = useNavigate();
  const onChange = (
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
    extra: TableCurrentDataSource<T>
  ) => {
    props.handleTableChange
      ? props.handleTableChange()
      : tableParamsToQsConvertor(pagination, filters, sorter, extra);
  };

  const removeFilter = (i: string) => {
    qs = { ...qs, [i]: null };
    console.log(qs, i);

    navigate(
      stringifyUrl(
        { url: location.pathname, query: { ...qs } },
        { skipNull: true, skipEmptyString: true }
      )
    );
  };

  return (
    <>
      {/* <div className="mb-4">
        {Object.keys(qs).map((i) => {
          return isArray(qs[i]) ? (
            qs[i].map((b) => (
              <IButton className="mx-1 px-1 " onClick={() => removeFilter(i)}>
                {t(`general.${i}`)}:{qs[i]}
              </IButton>
            ))
          ) : (
            <IButton className="mx-1 px-1" onClick={() => removeFilter(i)}>
              {t(`general.${i}`)}:{qs[i]}
            </IButton>
          );
        })}
      </div> */}
      <Table<T>
        showSorterTooltip={false}
        columns={columns}
        pagination={{
          showQuickJumper: true,
          defaultCurrent: props.currentPage ?? +page,
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
    </>
  );
};

export default ITable;
