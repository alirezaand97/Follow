import { Space, Tag } from "antd";

import { ColumnsType } from "antd/es/table";
import { IButton } from "@/components/general";
import { RegistrationRequestModel } from "@/models/registration_request.model";
import toJalali from "@/utils/to_jalali";
import useColumnFilterProps from "@/components/general/table/use_column_filter_props";
import useColumnSearchProps from "@/components/general/table/use_column_search_props";

const useTableConfig = () => {
  const getColumnSearchProps = useColumnSearchProps();
  const getColumnFilterProps = useColumnFilterProps();

  const columns: ColumnsType<RegistrationRequestModel> = [
    {
      title: "searchPaeams",
      dataIndex: "customerId",
      key: "customerId",
      width: 140,
      ellipsis: true,
      ...getColumnSearchProps("customerId"),
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
    },
    {
      title: "firstName",
      dataIndex: "firstName",
      key: "firstName",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("firstName"),
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
    },
    {
      title: "lastName",
      dataIndex: "lastName",
      key: "lastName",
      width: 160,
      ellipsis: true,
      ...getColumnSearchProps("lastName"),
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
    },
    {
      title: "phone",
      dataIndex: "phone",
      key: "phone",
      width: 160,
      ellipsis: true,
      ...getColumnSearchProps("phone"),
    },
    {
      title: "email",
      dataIndex: "email",
      key: "email",
      width: 160,
      ellipsis: true,
      ...getColumnSearchProps("email"),
    },
    {
      title: "registerType",
      dataIndex: "registerType",
      key: "registerType",
      width: 120,
      ellipsis: true,
      render(value, record, index) {
        return <Tag color="blue">{value}</Tag>;
      },
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
      ...getColumnFilterProps("registerType"),
    },

    {
      title: "fatherName",
      dataIndex: "fatherName",
      key: "fatherName",
      width: 160,
      ellipsis: true,
      sorter: true,
      sortDirections: ["descend", "ascend"],
      showSorterTooltip: true,
      ...getColumnSearchProps("fatherName"),
    },
    {
      title: "nationalCode",
      dataIndex: "nationalCode",
      key: "nationalCode",
      width: 140,
      ellipsis: true,
      ...getColumnSearchProps("nationalCode"),
    },
    {
      title: "createDate",
      dataIndex: "createDate",
      key: "createDate",
      width: 160,
      ellipsis: true,
      render(value, record, index) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: "lastUpdateDate",
      dataIndex: "lastUpdateDate",
      key: "lastUpdateDate",
      width: 160,
      ellipsis: true,
      render(value, record, index) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: "followUpType",
      dataIndex: "followUpType",
      key: "followUpType",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("followUpType"),
    },
    {
      title: "RecieveCustomerInfo",
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
      title: "actions",
      dataIndex: "actions",
      key: "actions",
      width: 70,
      fixed: "right",
      ellipsis: true,
      className: "flex justify-center",
      render(value, record, index) {
        return (
          <Space>
            <IButton size="small">عملیات</IButton>
          </Space>
        );
      },
    },
  ];

  return columns;
};

export default useTableConfig;
