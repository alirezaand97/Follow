import { ColumnType, FilterConfirmProps } from "antd/lib/table/interface";
import { Space, Tag } from "antd";

import FilterIcon from "@/components/icons/filter";
import IButton from "../button";
import IInput from "../input";
import { MdOutlineFilterAlt } from "react-icons/md";
import SearchIcon from "@/components/icons/search";
import { SortOrder } from "antd/es/table/interface";
import { parse } from "query-string";
import { useI18Next } from "@/i18n";
import { useLocation } from "react-router-dom";
import { useState } from "react";

type Props = {};

const useColumnFilterProps = () => {
  const { t } = useI18Next();
  const { search } = useLocation();
  const filterValues = parse(search) as any;

  const getColumnFilterProps = (
    dataIndex: any,
    title?: string
  ): ColumnType<any> => ({
    filterIcon: (filtered: boolean) => (
      <MdOutlineFilterAlt
        size={20}
        color={`${filterValues[dataIndex] ? "fill-primary-200" : undefined}`}
      />
    ),
    className: `${filterValues[dataIndex] ? "bg-gray-100/60 font-bold" : ""}`,
    filterSearch: true,
    defaultFilteredValue: filterValues[dataIndex],
    defaultSortOrder:
      filterValues["sortField"] == dataIndex && filterValues["sortOrder"]
        ? filterValues["sortOrder"]
        : undefined,
  });

  return getColumnFilterProps;
};

export default useColumnFilterProps;
