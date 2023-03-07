import {
  BranchesSettingModel,
  PishkhanListModel,
} from "@/models/registration.model";

import { ColumnsType } from "antd/es/table";
import IsChecked from "@/components/general/table/is_checked";
import { MdOutlineCheck } from "react-icons/md";
import RowNumber from "@/components/general/table/row_number";
import { t } from "i18next";
import { useAppDispatch } from "@/store";
import useColumnDateFilter from "@/components/general/table/use_column_date_filter";
import useColumnFilterProps from "@/components/general/table/use_column_filter_props";
import useColumnSearchProps from "@/components/general/table/use_column_search_props";
import useSorter from "@/components/general/table/use_sorter";

const useTableConfig = () => {
  const getColumnSearchProps = useColumnSearchProps();

  const getColumnSortProps = useSorter();
  const columns: ColumnsType<PishkhanListModel> = [
    {
      title: t("general.row"),
      width: 50,
      render: (value, item, index) => <RowNumber index={index} />,
    },
    {
      title: t("general.provinceTitle"),
      dataIndex: "provinceTitle",
      key: "provinceTitle",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("provinceTitle"),
      ...getColumnSortProps("provinceTitle"),
    },
    {
      title: t("general.city"),
      dataIndex: "cityTitle",
      key: "cityTitle",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("cityTitle", t("general.city")),
      ...getColumnSortProps("cityTitle"),
    },
    {
      title: t("general.pishkhanCityTitle"),
      dataIndex: "pishkhanCityTitle",
      key: "pishkhanCityTitle",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("pishkhanCityTitle"),
      ...getColumnSortProps("pishkhanCityTitle"),
    },
    {
      title: t("general.Reception"),
      dataIndex: "reception",
      key: "reception",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("reception"),
      ...getColumnSortProps("reception"),
    },
    {
      title: t("general.phoneNumber"),
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("phoneNumber"),
      ...getColumnSortProps("phoneNumber"),
    },
    {
      title: t("general.phone"),
      dataIndex: "receptionCellPhoneNumber",
      key: "receptionCellPhoneNumber",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("receptionCellPhoneNumber"),
      ...getColumnSortProps("receptionCellPhoneNumber"),
    },
    {
      title: t("general.officeAddress"),
      dataIndex: "officeAddress",
      key: "officeAddress",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("officeAddress"),
      ...getColumnSortProps("officeAddress"),
    },
    {
      title: t("general.categoryTitle"),
      dataIndex: "categoryTitle",
      key: "categoryTitle",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("categoryTitle"),
      ...getColumnSortProps("categoryTitle"),
    },
    {
      title: t("general.OfficeCode"),
      dataIndex: "code",
      key: "code",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("code",t("general.OfficeCode")),
      ...getColumnSortProps("code"),
    },

    {
      title: t("general.registerCustomerAsIme"),
      dataIndex: "registerCustomerAsIme",
      key: "registerCustomerAsIme",
      width: 120,
      ellipsis: true,
      ...getColumnSortProps("registerCustomerAsIme"),
      render(value) {
        return <IsChecked isChecked={value} />;
      },
    },
    {
      title: t("general.registerCustomerAsTse"),
      dataIndex: "registerCustomerAsTse",
      key: "registerCustomerAsTse",
      width: 120,
      ellipsis: true,
      ...getColumnSortProps("registerCustomerAsTse"),
      render(value) {
        return <IsChecked isChecked={value} />;
      },
    },
    // {
    //   title: t("general.RegisterInSandoghGardeshgari"),
    //   dataIndex: "RegisterInSandoghGardeshgari",
    //   key: "RegisterInSandoghGardeshgari",
    //   width: 120,
    //   ellipsis: true,
    //   ...getColumnSortProps("RegisterInSandoghGardeshgari"),
    //   render(value) {
    //     return <IsChecked isChecked={value} />;
    //   },
    // },
    {
      title: t("general.registerNewCustomerInIme"),
      dataIndex: "registerNewCustomerInIme",
      key: "registerNewCustomerInIme",
      width: 120,
      ellipsis: true,
      ...getColumnSortProps("registerNewCustomerInIme"),
      render(value) {
        return <IsChecked isChecked={value} />;
      },
    },
    {
      title: t("general.registerNewCustomerInTse"),
      dataIndex: "registerNewCustomerInTse",
      key: "registerNewCustomerInTse",
      width: 120,
      ellipsis: true,
      ...getColumnSortProps("registerNewCustomerInTse"),
      render(value) {
        return <IsChecked isChecked={value} />;
      },
    },
  ];

  return columns;
};

export default useTableConfig;
