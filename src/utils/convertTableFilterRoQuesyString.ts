import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { TableCurrentDataSource } from "antd/es/table/interface";
import { TablePaginationConfig } from "antd";
import { findKey } from "lodash";
import { object } from "yup";
import { scrollToTop } from "./scrollToTop";

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
      qs = {
        ...qs,
        page: pagination?.current?.toString() || "1",
        pageSize: pagination?.pageSize?.toString() || "10",
      };
    }
    if (sorter.order) {
      qs = {
        ...qs,
        sort: sorter.field?.toString() || "",
        order: sorter.order,
      };
    } else {
      qs = { ...qs, sort: "", order: "" };
    }
    scrollToTop();

    navigate(
      stringifyUrl(
        { url: location.pathname, query: { ...qs, ...filters } },
        { skipNull: true, skipEmptyString: true }
      )
    );
  };

  return { tableParamsToQsConvertor };
};
