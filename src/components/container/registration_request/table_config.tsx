import { ColumnsType } from "antd/es/table";
import { IButton } from "@/components/general";
import { MdVisibility } from "react-icons/md";
import { RegistrationRequestModel } from "@/models/registration.model";
import RowNumber from "@/components/general/table/row_number";
import { Tag } from "antd";
import UserName from "./username";
import { t } from "i18next";
import toJalali from "@/utils/to_jalali";
import { toggleRegisterRequestDetailDrawer } from "@/store/drawers";
import { useAppDispatch } from "@/store";
import useColumnDateFilter from "@/components/general/table/use_column_date_filter";
import useColumnFilterProps from "@/components/general/table/use_column_filter_props";
import useColumnSearchProps from "@/components/general/table/use_column_search_props";
import { useGetRequestStatusOptionsQuery } from "@/store/service/dataLoad";
import { useLazyRegistrationRequestUserNameQuery } from "@/store/service/registrationRequest";
import useSorter from "@/components/general/table/use_sorter";

const useTableConfig = () => {
  const getColumnSearchProps = useColumnSearchProps();
  const getColumnFilterProps = useColumnFilterProps();
  const getColumnDateProps = useColumnDateFilter();
  const getColumnSortProps = useSorter();
  const dispatch = useAppDispatch();

  const handleShowRequestDetail = (record: RegistrationRequestModel) => {
    dispatch(
      toggleRegisterRequestDetailDrawer({
        isOpen: true,
        customerId: +record.id,
      })
    );
  };

  const { data: requestStatusList } = useGetRequestStatusOptionsQuery();

  const columns: ColumnsType<RegistrationRequestModel> = [
    {
      title: t("general.row"),
      width: 50,
      ellipsis: true,
      render: (value, item, index) => <RowNumber index={index} />,
    },
    {
      title: t("general.fullName"),
      dataIndex: "fullName",
      key: "fullName",
      width: 120,
      ellipsis: true,
      ...getColumnSearchProps("fullName"),
      ...getColumnSortProps("fullName"),
    },
    {
      title: t("general.customerCcmsCode"),
      dataIndex: "customerCcmsCode",
      key: "customerCcmsCode",
      width: 140,
      ellipsis: true,
      ...getColumnSearchProps("customerCcmsCode"),
      ...getColumnSortProps("customerCcmsCode"),
    },
    {
      title: t("general.registrationType"),
      dataIndex: "agenda",
      key: "agenda",
      width: 120,
      ellipsis: true,
      render: (value) => (
        <Tag color="blue">{value == "None" ? "اوراق" : ""}</Tag>
      ),
      filters: [],
      ...getColumnFilterProps("agenda"),
    },
    {
      title: t("general.nationalCode"),
      dataIndex: "nationalCode",
      key: "nationalCode",
      width: 140,
      ellipsis: true,
      ...getColumnSearchProps("nationalCode"),
      render: (value) => (
        <p className="text-left flex" dir="ltr">
          {value}
        </p>
      ),
    },
    {
      title: t("general.CellPhone"),
      dataIndex: "cellPhone",
      key: "cellPhone",
      width: 160,
      ellipsis: true,
      ...getColumnSearchProps("cellPhone"),
      render: (value) => (
        <p className="text-left flex" dir="ltr">
          {value}
        </p>
      ),
    },
    // {
    //   title: t("general.EmailAddress"),
    //   dataIndex: "EmailAddress",
    //   key: "EmailAddress",
    //   width: 160,
    //   ellipsis: true,
    //   ...getColumnSearchProps("EmailAddress"),
    //   render: (value) => (
    //     <p className="text-left flex" dir="ltr">
    //       {value}
    //     </p>
    //   ),
    // },
    {
      title: t("general.createdDate"),
      dataIndex: "createdDate",
      key: "createdDate",
      width: 160,
      ellipsis: true,
      render(value, record, index) {
        return <span>{toJalali(value)}</span>;
      },
      ...getColumnDateProps("createdDate"),
      ...getColumnSortProps("createdDate"),
    },
    {
      title: t("general.modifiedDate"),
      dataIndex: "modifiedDate",
      key: "modifiedDate",
      width: 160,
      ellipsis: true,
      render(value, record, index) {
        return <span>{toJalali(value)}</span>;
      },
      ...getColumnDateProps("modifiedDate"),
      ...getColumnSortProps("modifiedDate"),
    },
    {
      title: t("general.userStatus"),
      dataIndex: "status",
      key: "status",
      width: 160,
      ellipsis: true,
      ...getColumnFilterProps("status"),
      filters:
        requestStatusList?.map((i) => ({
          text: i.displayName,
          value: i.name,
        })) ?? [],
    },
    {
      title: t("general.dataWasTakenFromSejam"),
      dataIndex: "dataWasTakenFromSejam",
      key: "dataWasTakenFromSejam",
      width: 80,
      ellipsis: true,
      render(value) {
        return value ? t("general.sejam") : t("general.customer");
      },
      ...getColumnFilterProps("dataWasTakenFromSejam"),
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
      title: t("general.username"),
      dataIndex: "agenda",
      key: "agenda",
      width: 120,
      ellipsis: true,
      render: (value, record) => (
        <UserName ccmsCode={record.customerCcmsCode} />
      ),
    },
    {
      title: t("general.actions"),
      dataIndex: "actions",
      key: "actions",
      width: 120,
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
