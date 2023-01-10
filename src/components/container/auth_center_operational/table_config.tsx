import { AuthCenterOperationalModel } from "@/models/registration.model";
import { ColumnsType } from "antd/es/table";
import { Tag } from "antd";
import { t } from "i18next";
import toJalali from "@/utils/to_jalali";
import useColumnDateFilter from "@/components/general/table/use_column_date_filter";
import useColumnFilterProps from "@/components/general/table/use_column_filter_props";
import useColumnSearchProps from "@/components/general/table/use_column_search_props";
import useSorter from "@/components/general/table/use_sorter";

const useTableConfig = () => {
  const getColumnSearchProps = useColumnSearchProps();
  const getColumnFilterProps = useColumnFilterProps();
  const ReturnFromBrokerSubmitDateProps = useColumnDateFilter(
    "ReturnFromBrokerSubmitDate"
  );
  const SendToBrokerSubmitDateProps = useColumnDateFilter(
    "SendToBrokerSubmitDate"
  );
  const SubmitDateProps = useColumnDateFilter("SubmitDate");

  const ApprovePishkhanSubmitDateProps = useColumnDateFilter(
    "ApprovePishkhanSubmitDate"
  );
  const AuthenticatedSubmitDateProps = useColumnDateFilter(
    "AuthenticatedSubmitDate"
  );

  const getColumnSortProps = useSorter();

  const columns: ColumnsType<AuthCenterOperationalModel> = [
    {
      title: t("general.OfficeCode"),
      width: 120,
      ellipsis: true,
      dataIndex: "OfficeCode",
      key: "OfficeCode",
      ...getColumnSearchProps("OfficeCode"),
    },
    {
      title: t("general.CustomerTitle"),
      width: 180,
      ellipsis: true,
      dataIndex: "CustomerTitle",
      key: "CustomerTitle",
      ...getColumnSearchProps("CustomerTitle"),
      ...getColumnSortProps("CustomerTitle"),
    },
    {
      title: t("general.CellPhone"),
      width: 140,
      ellipsis: true,
      dataIndex: "CellPhone",
      key: "CellPhone",
      ...getColumnSearchProps("CellPhone"),
    },
    {
      title: t("general.NationalCode"),
      width: 120,
      ellipsis: true,
      dataIndex: "NationalCode",
      key: "NationalCode",
      ...getColumnSearchProps("NationalCode"),
    },
    {
      title: t("general.ResultStateTitle"),
      width: 180,
      ellipsis: true,
      dataIndex: "ResultStateTitle",
      key: "ResultStateTitle",
      ...getColumnFilterProps("ResultStateTitle"),
      filters: [],
      render: (value) => (
        <p className="text-left flex" dir="ltr">
          {value}
        </p>
      ),
    },
    {
      title: t("general.CategoryTitle"),
      width: 180,
      ellipsis: true,
      dataIndex: "CategoryTitle",
      key: "CategoryTitle",
      ...getColumnFilterProps("CategoryTitle"),
      filters: [],
    },

    {
      title: t("general.ReturnFromBrokerSubmitDate"),
      ...ReturnFromBrokerSubmitDateProps(),
      ...getColumnSortProps("ReturnFromBrokerSubmitDate"),
      width: 170,
      ellipsis: true,
      dataIndex: "ReturnFromBrokerSubmitDate",
      key: "ReturnFromBrokerSubmitDate",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.SendToBrokerSubmitDate"),
      ...SendToBrokerSubmitDateProps(),
      ...getColumnSortProps("SendToBrokerSubmitDate"),
      width: 170,
      ellipsis: true,
      dataIndex: " SendToBrokerSubmitDate",
      key: " SendToBrokerSubmitDate",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.SubmitDate"),
      ...SubmitDateProps(),
      ...getColumnSortProps("SubmitDate"),
      width: 150,
      ellipsis: true,
      dataIndex: "SubmitDate",
      key: "SubmitDate",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.ApprovePishkhanSubmitDate"),
      ...ApprovePishkhanSubmitDateProps(),
      ...getColumnSortProps("ApprovePishkhanSubmitDate"),
      width: 150,
      ellipsis: true,
      dataIndex: "ApprovePishkhanSubmitDate",
      key: "ApprovePishkhanSubmitDate",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.AuthenticatedSubmitDate"),
      ...AuthenticatedSubmitDateProps(),
      ...getColumnSortProps("ApprovePishkhanSubmitDate"),
      width: 150,
      ellipsis: true,
      dataIndex: " AuthenticatedSubmitDate",
      key: " AuthenticatedSubmitDate",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },

    {
      title: t("general.IsClosed"),
      width: 180,
      ellipsis: true,
      dataIndex: "IsClosed",
      key: "IsClosed",
      ...getColumnSearchProps("followUpType"),
    },
    {
      title: t("general.CityTitle"),
      width: 140,
      ellipsis: true,
      dataIndex: "CityTitle",
      key: "CityTitle",
      ...getColumnSearchProps("CityTitle"),
    },
    {
      title: t("general.PostalBarcode"),
      width: 140,
      ellipsis: true,
      dataIndex: "PostalBarcode",
      key: "PostalBarcode",
      ...getColumnSearchProps("PostalBarcode"),
    },
    {
      title: t("general.ReasonDescription"),
      width: 180,
      ellipsis: true,
      dataIndex: "ReasonDescription",
      key: "ReasonDescription",
    },
  ];

  return columns;
};

export default useTableConfig;
