import { ITable } from "@/components/general";
import ITitle from "@/components/general/title";
import React from "react";
import { Typography } from "antd";
import { useI18Next } from "@/i18n";

type Props = {};

const RequestHistory = (props: Props) => {
  const { t } = useI18Next();

  const dataSource = [
    {
      key: "1",
      date: "14:42:58 1401/09/23	",
      status: "	تکمیل اطلاعات مالی تحصیلی",
      user: "alireza ",
      reason: "",
      description: "ثبت مشتری ",
    },
    {
      key: "2",
      date: "14:42:58 1401/09/23	",
      status: "تکمیل اطلاعات شغلی	",
      user: "alireza ",
      reason: "",
      description: "ثبت مشتری ",
    },
    {
      key: "2",
      date: "42:58 1401/09/23	",
      status: "ثبت مشتری اوراق	",
      user: "alireza ",
      reason: "",
      description: "ثبت مشتری ",
    },
    {
      key: "2",
      date: "42:58 1401/09/23",
      status: "ثبت مشتری اوراق",
      user: "alireza ",
      reason: "",
      description: "ثبت مشتری ",
    },
  ];

  const columns = [
    {
      title: t("general.date"),
      dataIndex: "date",
      key: "date",
    },
    {
      title: t("general.status"),
      dataIndex: "status",
      key: "status",
    },
    {
      title: t("general.user"),
      dataIndex: "user",
      key: "user",
    },
    {
      title: t("general.reason"),
      dataIndex: "reason",
      key: "reason",
    },
    {
      title: t("general.description"),
      dataIndex: "description",
      key: "description",
    },
  ];
  return (
    <div className="px-2 py-4">
      <ITitle level={5}>{t("general.stateHistory")}</ITitle>
      <ITable
        dataSource={dataSource}
        columns={columns}
        className="iresponsive-table requests-table "
        pagination={{ hideOnSinglePage: true }}
      />
    </div>
  );
};

export default RequestHistory;
