import { Form, Input } from "antd";
import { FormItem, IButton } from "@/components/general";

import DateRange from "@/components/general/date_range";
import React from "react";
import { parse } from "query-string";
import { useLocation } from "react-router-dom";

type Props = {};

type InitialValues = {
  fromDate: string;
  toDate: string;
  filteredDateField: string;
};

const DateFilterMenu = (props: Props) => {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const { search } = useLocation();
  const qs = parse(search);
  console.log(qs);
  
  return (
    <div className="mb-4 flex">
      <Form
        initialValues={{
          fromDate: "xxx",
          toDate: "asas",
          filteredDateField: "asas",
        }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <DateRange hasRenge={true} />
        <IButton type="primary" htmlType="submit">
          Submit
        </IButton>
      </Form>
    </div>
  );
};

export default DateFilterMenu;
