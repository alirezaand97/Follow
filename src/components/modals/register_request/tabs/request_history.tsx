import { ColumnsType, TablePaginationConfig } from "antd/es/table";
import React, { useState } from "react";

import { ITable } from "@/components/general";
import ITitle from "@/components/general/title";
import { RegistrationRequestHistoryModel } from "@/models/registration.model";
import { Typography } from "antd";
import toJalali from "@/utils/to_jalali";
import { useAppSelector } from "@/store";
import { useGetRequestHistoryQuery } from "@/store/service/registrationRequest";
import { useI18Next } from "@/i18n";

type Props = {};

const RequestHistory = (props: Props) => {
  const { t } = useI18Next();

  const customerId = useAppSelector(
    (s) => s.drawers.toggleRegisterRequestDetail.customerId
  );

  const { data: requestHistory } = useGetRequestHistoryQuery({
    CustomerId: customerId || 1,
  });

  const handleOnChange = (pagination: TablePaginationConfig) => {};

  const columns: ColumnsType<RegistrationRequestHistoryModel> = [
    {
      title: t("general.date"),
      dataIndex: "time",
      key: "time",
      render(value, record, index) {
        return <span>{toJalali(value)}</span>;
      },
    },
    {
      title: t("general.lastStatus"),
      dataIndex: "lastStatus",
      key: "lastStatus",
    },
    {
      title: t("general.newStatus"),
      dataIndex: "newStatus",
      key: "newStatus",
    },
  ];

  return (
    <div>
      <ITitle level={5}>{t("general.stateHistory")}</ITitle>
      <ITable<RegistrationRequestHistoryModel>
        dataSource={Object.assign([], requestHistory)?.reverse()}
        columns={columns}
        className="iresponsive-table requests-table "
        pagination={{ hideOnSinglePage: true }}
        scroll={{ x: true }}
        currentPage={1}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default RequestHistory;
