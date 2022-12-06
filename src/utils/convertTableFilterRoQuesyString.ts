import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { parse, stringify, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { TableCurrentDataSource } from "antd/es/table/interface";
import { TablePaginationConfig } from "antd";

export const useConvertTableFilterRoQuesyString = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let qs = parse(location.search);

  const tableParamsToQsConvertor = <T>(
    pagination: TablePaginationConfig,
    filters: Record<string, FilterValue | null>,
    sorter: SorterResult<T> | SorterResult<T>[],
    extra: TableCurrentDataSource<T>
  ) => {
    if (Array.isArray(sorter)) return;
    if (pagination) {
      qs = { ...qs, page: pagination?.current?.toString() || "" };
    }
    if (sorter.order) {
      qs = {
        ...qs,
        sortField: sorter.field?.toString() || "",
        sortOrder: sorter.order?.toString() || "",
      };
    }
    navigate(
      stringifyUrl(
        { url: location.pathname, query: { ...qs, ...filters } },
        { skipNull: true, skipEmptyString: true }
      )
    );
  };

  return { tableParamsToQsConvertor };
};
