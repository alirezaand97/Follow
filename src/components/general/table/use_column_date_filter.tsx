import { Col, Form, Row, Space, Tag, message } from "antd";
import { ColumnType, FilterConfirmProps } from "antd/lib/table/interface";
import { MdDateRange, MdOutlineCalendarToday } from "react-icons/md";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import FormItem from "../form_item";
import IButton from "../button";
import IInput from "../input";
import IJalaliDatePicker from "../date_picker";
import SearchIcon from "@/components/icons/search";
import TimerIcon from "@/components/icons/timer";
import dayjs from "dayjs";
import { useI18Next } from "@/i18n";
import { useState } from "react";

type Props = {};

interface FormProps {
  fromDate: dayjs.Dayjs;
  toDate: dayjs.Dayjs;
  filteredDate: string;
  confirm: (param?: FilterConfirmProps) => void;
}

const useColumnDateFilter = () => {
  const { t } = useI18Next();
  const { search } = useLocation();
  let qs = parse(search) as any;

  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: any
  ) => {};

  const handleReset = (
    clearFilters: () => void,
    confirm: (param?: FilterConfirmProps) => void
  ) => {
    clearFilters();
    qs = {
      ...qs,
      toDate: null,
      fromDate: null,
      filteredDate: null,
    };

    form.setFieldsValue({ fromDate: null, toDate: null, filteredDate: null });

    navigate(
      stringifyUrl(
        { url: location.pathname, query: { ...qs } },
        { skipNull: true, skipEmptyString: true }
      )
    );

    confirm();
  };

  const isValidDate = (date: string) => {
    return date && dayjs(date).isValid();
  };

  const isValidDateRange = (fromDate: dayjs.Dayjs, toDate: dayjs.Dayjs) => {
    return toDate?.isAfter(fromDate);
  };

  const onFinish = ({ confirm, toDate, fromDate, filteredDate }: FormProps) => {
    if (!isValidDateRange(fromDate, toDate)) {
      messageApi.open({
        type: "warning",
        content: t("messages.validateRangePicker"),
      });
      return;
    }

    qs = {
      ...qs,
      toDate: toDate?.format("YYYY-MM-DD"),
      fromDate: fromDate?.format("YYYY-MM-DD"),
      filteredDate,
    };
    navigate(
      stringifyUrl(
        { url: location.pathname, query: { ...qs } },
        { skipNull: true, skipEmptyString: true }
      )
    );
    confirm();
  };

  const getColumnDateProps = (
    dataIndex: any,
    title?: string
  ): ColumnType<any> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => (
      <div
        style={{ padding: 8 }}
        onKeyDown={(e) => e.stopPropagation()}
        className="w-80"
      >
        {contextHolder}
        <Form
          layout="vertical"
          onFinish={(values) => {
            onFinish({ confirm, filteredDate: dataIndex, ...values });
          }}
          form={form}
          autoComplete="off"
          initialValues={{
            toDate: isValidDate(qs?.toDate as string)
              ? dayjs(qs?.toDate as string)
              : undefined,
            fromDate: isValidDate(qs?.fromDate as string)
              ? dayjs(qs?.fromDate as string)
              : undefined,
          }}
        >
          <Row className="mb-4" dir="rtl" gutter={8}>
            <Col span={12}>
              <FormItem name="fromDate" label={`${t("general.fromDate")}`}>
                <IJalaliDatePicker placeholder={`${t("general.fromDate")}`} />
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem name="toDate" label={`${t("general.toDate")}`}>
                <IJalaliDatePicker
                  placeholder={`${t("general.toDate")}`}
                  defaultValue={
                    isValidDate(qs?.toDate as string)
                      ? dayjs(qs?.toDate as string)
                      : undefined
                  }
                />
              </FormItem>
            </Col>
          </Row>
          <Row className="flex-row-reverse" gutter={12}>
            <Col>
              <IButton size="small" htmlType="submit" style={{ width: 90 }}>
                {t("general.search")}
              </IButton>
            </Col>
            <Col>
              <IButton
                onClick={() =>
                  clearFilters && handleReset(clearFilters, confirm)
                }
                size="small"
                style={{ width: 90 }}
                danger
              >
                {t("general.deleteFilters")}
              </IButton>
            </Col>
          </Row>
        </Form>
      </div>
    ),
    className: `${qs[dataIndex] ? "bg-gray-100/60 font-bold" : ""}`,
    filterIcon: (filtered: boolean) => (
      <MdOutlineCalendarToday
        size={16}
        className={`${
          qs?.filteredDate == dataIndex ? "fill-primary-200" : undefined
        }`}
      />
    ),
    defaultSortOrder:
      qs["sortField"] == dataIndex && qs["sortOrder"]
        ? qs["sortOrder"]
        : undefined,
  });

  return getColumnDateProps;
};

export default useColumnDateFilter;
