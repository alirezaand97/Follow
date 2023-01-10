import { FilterValue, SorterResult } from "antd/lib/table/interface";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { TableCurrentDataSource } from "antd/es/table/interface";
import { TablePaginationConfig } from "antd";
import { findKey } from "lodash";
import { object } from "yup";

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
    console.log(filters);

    if (Array.isArray(sorter)) return;
    if (pagination) {
      qs = {
        ...qs,
        _page: pagination?.current?.toString() || "1",
        _limit: pagination?.pageSize?.toString() || "10",
      };
    }
    if (sorter.order) {
      qs = {
        ...qs,
        sort: sorter.field?.toString() || "",
        // _order: sorter.order == "ascend" ? "asc" : "desc",
        order: sorter.order,
      };
    } else {
      qs = { ...qs, sort: "", order: "" };
    }

    findKey(filters, function (o) {
      return o?.includes("date_");
    });

    let date = Object.keys(filters).find((i) => i.includes("date_")) as string;
    if (filters[date]?.length > 1) {
      filters = {
        ...filters,
        [date]: null,
        filterDate: [date?.replace("date_", "")],
        fromDate: [filters[date][0]],
        toDate: [filters[date][1]],
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
