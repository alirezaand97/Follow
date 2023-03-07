import { Col, Row } from "antd";
import { IButton, ITable } from "@/components/general";
import React, { useState } from "react";

import { ColumnsType } from "antd/es/table";
import CreateNote from "../create_note";
import ITitle from "@/components/general/title";
import RowNumber from "@/components/general/table/row_number";
import { useI18Next } from "@/i18n";

type Props = {};

const NoteList = (props: Props) => {
  const { t } = useI18Next();
  const [open, setOpen] = useState(false);


  const onCreate = (values: any) => {
    setOpen(false);
  };

  const openCreateNoteModal = () => {
    setOpen(true);
  };

  const dataSource = [
    {
      key: "1",
      date: "14:42:58 1401/09/23	",
      user: "alireza ",
      reason: "تماس بی پاسخ",
      description: "توضیحات تست",
    },
    {
      key: "2",
      date: "14:42:58 1401/09/23	",
      user: "alireza ",
      reason: "شماره در دسترس نبود - خاموش بود",
      description: "توضیحات تست",
    },
    {
      key: "3",
      date: "42:58 1401/09/23	",
      user: "alireza ",
      reason: "مشتری حضوری به شعبه مراجعه می کند",
      description: "توضیحات تست",
    },
    {
      key: "4",
      date: "42:58 1401/09/23",
      user: "alireza ",
      reason: "",
      description: "توضیحات تست",
    },
  ];

  const columns: ColumnsType<any> = [
    {
      title: t("general.user"),
      dataIndex: "user",
      key: "user",
    },
    {
      title: t("general.date"),
      dataIndex: "date",
      key: "date",
    },
    {
      title: t("general.cancelReason"),
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
    <>
      <div>
        <Row className="flex items-center justify-between mb-4">
          <Col>
            <IButton type="primary" onClick={openCreateNoteModal}>
              {t("general.newNote")}
            </IButton>
          </Col>
        </Row>
        <ITable
          dataSource={dataSource}
          columns={columns}
          className="iresponsive-table requests-table "
          pagination={{ hideOnSinglePage: true }}
          scroll={{ x: true }}
        />
      </div>
      <CreateNote
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export default NoteList;
