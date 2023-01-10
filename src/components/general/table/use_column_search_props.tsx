import { ColumnType, FilterConfirmProps } from "antd/lib/table/interface";
import { Space, Tag } from "antd";
import { json, useLocation } from "react-router-dom";

import IButton from "../button";
import IInput from "../input";
import SearchIcon from "@/components/icons/search";
import { parse } from "query-string";
import { useI18Next } from "@/i18n";
import { useState } from "react";

type Props = {};

const useColumnSearchProps = () => {
  const { t } = useI18Next();
  const { search } = useLocation();
  const searchValues = parse(search) as any;

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: any
  ) => {
    confirm();
  };

  const handleReset = (
    clearFilters: () => void,
    confirm: (param?: FilterConfirmProps) => void
  ) => {
    clearFilters();
    confirm();
  };

  const getColumnSearchProps = (
    dataIndex: any,
    title?: string
  ): ColumnType<any> => ({
    title: (
      <div className=" w-full flex justify-between">
        <div>{t(`general.${dataIndex}`)}</div>
        {searchValues[dataIndex] && (
          <Tag color="default">{searchValues[dataIndex]}</Tag>
        )}
      </div>
    ),
    filteredValue: [searchValues[dataIndex]],
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{ padding: 8 }}
        onKeyDown={(e) => e.stopPropagation()}
        className="w-60"
      >
        <IInput
          placeholder={`${t("general.searchSth", {
            sth: t(`general.${dataIndex}`),
          })}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            handleSearch(selectedKeys as string[], confirm, dataIndex)
          }
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <IButton
            onClick={() =>
              handleSearch(selectedKeys as string[], confirm, dataIndex)
            }
            size="small"
            style={{ width: 90 }}
          >
            {t("general.search")}
          </IButton>
          <IButton
            onClick={() => clearFilters && handleReset(clearFilters, confirm)}
            size="small"
            style={{ width: 90 }}
            danger
          >
            حذف فیلتر
          </IButton>
        </Space>
      </div>
    ),
    className: `${searchValues[dataIndex] ? "bg-gray-100/60 font-bold" : ""}`,
    filterIcon: (filtered: boolean) => (
      <SearchIcon
        className="w-5"
        color={`${searchValues[dataIndex] ? "fill-primary-200" : undefined}`}
      />
    ),
    defaultSortOrder:
      searchValues["sortField"] == dataIndex && searchValues["sortOrder"]
        ? searchValues["sortOrder"]
        : undefined,
  });

  return getColumnSearchProps;
};

export default useColumnSearchProps;
