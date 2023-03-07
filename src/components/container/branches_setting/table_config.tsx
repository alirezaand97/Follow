import { BranchesSettingModel } from "@/models/registration.model";
import { ColumnsType } from "antd/es/table";
import IsChecked from "@/components/general/table/is_checked";
import { MdClear } from "react-icons/md";
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
  const columns: ColumnsType<BranchesSettingModel> = [
    {
      title: t("general.row"),
      width: 50,
      ellipsis: true,
      render: (value, item, index) => <RowNumber index={index} />,
    },
    {
      title: t("general.brokerBranchTitle"),
      dataIndex: "brokerBranchTitle",
      key: "brokerBranchTitle",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("brokerBranchTitle"),
      ...getColumnSortProps("brokerBranchTitle"),
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
    {
      title: t("general.registerInSandoghGardeshgari"),
      dataIndex: "registerInSandoghGardeshgari",
      key: "registerInSandoghGardeshgari",
      width: 120,
      ellipsis: true,
      ...getColumnSortProps("registerInSandoghGardeshgari"),
      render(value) {
        return <IsChecked isChecked={value} />;
      },
    },
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
