import { AuthCenterOperationalModel } from "@/models/registration.model";
import { ColumnsType } from "antd/es/table";
import { MdOutlineCheck } from "react-icons/md";
import RowNumber from "@/components/general/table/row_number";
import { t } from "i18next";
import toJalali from "@/utils/to_jalali";
import useColumnDateFilter from "@/components/general/table/use_column_date_filter";
import useColumnFilterProps from "@/components/general/table/use_column_filter_props";
import useColumnSearchProps from "@/components/general/table/use_column_search_props";
import useSorter from "@/components/general/table/use_sorter";

const useTableConfig = () => {
  const getColumnSearchProps = useColumnSearchProps();
  const getColumnFilterProps = useColumnFilterProps();
  const getColumnDateProps = useColumnDateFilter();

  const getColumnSortProps = useSorter();

  // createDate: string;
  // identificationCode: number; *
  // fullName: string; *
  // nationalCode: string; *
  // customerCcmsCode: number;
  // cellPhone: string; *
  // status: string;
  // categoryType: string;
  // city: string; *
  // province: string;
  // customerAuthenticated: string; *
  // returnFromBroker: string; *
  // sendToBroker: string; *
  // approveByOfficer: string; *

  const columns: ColumnsType<AuthCenterOperationalModel> = [
    {
      title: t("general.row"),
      width: 120,
      ellipsis: true,
      render: (value, item, index) => <RowNumber index={index} />,
    },
    {
      title: t("general.OfficeCode"),
      width: 120,
      ellipsis: true,
      dataIndex: "identificationCode",
      key: "identificationCode",
      ...getColumnSearchProps("identificationCode"),
    },
    {
      title: t("general.CustomerTitle"),
      width: 180,
      ellipsis: true,
      dataIndex: "fullName",
      key: "fullName",
      ...getColumnSearchProps("fullName"),
      ...getColumnSortProps("fullName"),
    },
    {
      title: t("general.telephone"),
      width: 140,
      ellipsis: true,
      dataIndex: "cellPhone",
      key: "cellPhone",
      ...getColumnSearchProps("cellPhone", t("general.telephone")),
    },
    {
      title: t("general.NationalCode"),
      width: 120,
      ellipsis: true,
      dataIndex: "nationalCode",
      key: "nationalCode",
      ...getColumnSearchProps("nationalCode"),
    },
    {
      title: t("general.status"),
      width: 180,
      ellipsis: true,
      dataIndex: "status",
      key: "status",
      ...getColumnFilterProps("status"),
      filters: [],
      render: (value) => (
        <p className="text-left flex" dir="ltr">
          {value}
        </p>
      ),
    },
    {
      title: t("general.categoryTitle"),
      width: 180,
      ellipsis: true,
      dataIndex: "categoryType",
      key: "categoryType",
      ...getColumnFilterProps("categoryType"),
      filters: [],
    },

    {
      title: t("general.ReturnFromBrokerSubmitDate"),
      ...getColumnDateProps("returnFromBroker"),
      ...getColumnSortProps("returnFromBroker"),
      width: 170,
      ellipsis: true,
      dataIndex: "returnFromBroker",
      key: "returnFromBroker",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.SendToBrokerSubmitDate"),
      ...getColumnDateProps("sendToBroker"),
      ...getColumnSortProps("sendToBroker"),
      width: 170,
      ellipsis: true,
      dataIndex: " sendToBroker",
      key: " sendToBroker",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.SubmitDate"),
      ...getColumnDateProps("SubmitDate"),
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
      ...getColumnDateProps("approveByOfficer"),
      ...getColumnSortProps("approveByOfficer"),
      width: 150,
      ellipsis: true,
      dataIndex: "approveByOfficer",
      key: "approveByOfficer",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.AuthenticatedSubmitDate"),
      ...getColumnDateProps("customerAuthenticated"),
      ...getColumnSortProps("customerAuthenticated"),
      width: 150,
      ellipsis: true,
      dataIndex: " customerAuthenticated",
      key: " customerAuthenticated",
      render(value) {
        return <span>{toJalali(value)}</span>;
      },
    },

    // {
    //   title: t("general.IsClosed"),
    //   width: 180,
    //   ellipsis: true,
    //   dataIndex: "IsClosed",
    //   key: "IsClosed",
    //   ...getColumnSearchProps("IsClosed"),
    //   render(value) {
    //     return (
    //       <div className="flex justify-center">
    //         {value ? <MdOutlineCheck size={18} /> : ""}
    //       </div>
    //     );
    //   },
    // },
    {
      title: t("general.CityTitle"),
      width: 140,
      ellipsis: true,
      dataIndex: "city",
      key: "city",
      ...getColumnSearchProps("city"),
    },
    {
      title: t("general.PostalBarcode"),
      width: 140,
      ellipsis: true,
      dataIndex: "PostalBarcode",
      key: "PostalBarcode",
      ...getColumnSearchProps("PostalBarcode"),
    },
    // {
    //   title: t("general.ReasonDescription"),
    //   width: 180,
    //   ellipsis: true,
    //   dataIndex: "ReasonDescription",
    //   key: "ReasonDescription",
    // },
  ];

  return columns;
};

export default useTableConfig;
