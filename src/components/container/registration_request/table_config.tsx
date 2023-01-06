import { ColumnsType } from "antd/es/table";
import { IButton } from "@/components/general";
import { RegistrationRequestModel } from "@/models/registration_request.model";
import { Tag } from "antd";
import { t } from "i18next";
import toJalali from "@/utils/to_jalali";
import { toggleRegisterRequestDetailDrawer } from "@/store/drawers";
import { useAppDispatch } from "@/store";
import useColumnFilterProps from "@/components/general/table/use_column_filter_props";
import useColumnSearchProps from "@/components/general/table/use_column_search_props";

const useTableConfig = () => {
  const getColumnSearchProps = useColumnSearchProps();
  const getColumnFilterProps = useColumnFilterProps();

  const dispatch = useAppDispatch();

  const handleShowRequestDetail = (record: RegistrationRequestModel) => {
    dispatch(
      toggleRegisterRequestDetailDrawer({
        isOpen: true,
        customerId: +record.CustomerId,
      })
    );
  };

  const columns: ColumnsType<RegistrationRequestModel> = [
    {
      title: t("general.CustomerId"),
      dataIndex: "CustomerId",
      key: "CustomerId",
      width: 140,
      ellipsis: true,
      ...getColumnSearchProps("CustomerId"),
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
    },
    {
      title: t("general.FirstName"),
      dataIndex: "FirstName",
      key: "FirstName",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("FirstName"),
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
    },
    {
      title: t("general.LastName"),
      dataIndex: "LastName",
      key: "LastName",
      width: 160,
      ellipsis: true,
      ...getColumnSearchProps("LastName"),
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
    },
    {
      title: t("general.CellPhone"),
      dataIndex: "CellPhone",
      key: "CellPhone",
      width: 160,
      ellipsis: true,
      ...getColumnSearchProps("CellPhone"),
    },
    {
      title: t("general.EmailAddress"),
      dataIndex: "EmailAddress",
      key: "EmailAddress",
      width: 160,
      ellipsis: true,
      ...getColumnSearchProps("EmailAddress"),
      render: (value) => (
        <p className="text-left flex" dir="ltr">
          {value}
        </p>
      ),
    },
    {
      title: t("general.RegisterType"),
      dataIndex: "RegisterType",
      key: "RegisterType",
      width: 120,
      ellipsis: true,
      render: (value) => <Tag color="blue">{value}</Tag>,
      filters: [
        {
          text: "اوراق",
          value: "1",
        },
        {
          text: "صندوق",
          value: "2",
        },
      ],
      ...getColumnFilterProps("RegisterType"),
    },

    {
      title: t("general.FatherName"),
      dataIndex: "FatherName",
      key: "FatherName",
      width: 160,
      ellipsis: true,
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
      ...getColumnSearchProps("FatherName"),
    },
    {
      title: t("general.NationalCode"),
      dataIndex: "NationalCode",
      key: "NationalCode",
      width: 140,
      ellipsis: true,
      ...getColumnSearchProps("NationalCode"),
    },
    {
      title: t("general.CreationDate"),
      dataIndex: "CreationDate",
      key: "CreationDate",
      width: 160,
      ellipsis: true,
      render(value, record, index) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.LastUpdateDate"),
      dataIndex: "LastUpdateDate",
      key: "LastUpdateDate",
      width: 160,
      ellipsis: true,
      render(value, record, index) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.followUpType"),
      dataIndex: "FollowUpType",
      key: "followUpType",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("followUpType"),
    },
    {
      title: t("general.RecieveCustomerInfo"),
      dataIndex: "RecieveCustomerInfo",
      key: "RecieveCustomerInfo",
      width: 80,
      ellipsis: true,
      ...getColumnFilterProps("RecieveCustomerInfo"),
      filters: [
        {
          text: "مشتری",
          value: "customer",
        },
        {
          text: "سجامی",
          value: "sejami",
        },
      ],
    },
    {
      title: t("general.actions"),
      dataIndex: "actions",
      key: "actions",
      width: 70,
      fixed: "right",
      ellipsis: true,
      className: "flex justify-center",
      render(value, record, index) {
        return (
          <IButton
            size="small"
            onClick={() => handleShowRequestDetail(record)}
            className="border-blue-300 text-blue-300"
          >
            عملیات
          </IButton>
        );
      },
    },
  ];

  return columns;
};

export default useTableConfig;
