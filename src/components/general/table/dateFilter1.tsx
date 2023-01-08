import { Col, Form, Row, message } from "antd";
import { parse, stringifyUrl } from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FilterConfirmProps } from "antd/lib/table/interface";
import FormItem from "../form_item";
import IButton from "../button";
import IJalaliDatePicker from "../date_picker";
import dayjs from "dayjs";
import { useI18Next } from "@/i18n";

type Props = {};
interface FormProps {
  fromDate: dayjs.Dayjs;
  toDate: dayjs.Dayjs;
  filteredDate: string;
  confirm: (param?: FilterConfirmProps) => void;
}

const DateFilter1 = () => {
  const { t } = useI18Next();
  const { search } = useLocation();
  let qs = parse(search) as any;

  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    setDates({
      ...dates,
      toDate:
        // dataIndex == qs?.filteredDate && isValidDate(qs?.toDate as string)
        dayjs(qs?.toDate as string),
      // : null,
      fromDate:
        // dataIndex == qs?.filteredDate && isValidDate(qs?.fromDate as string)
        dayjs(qs?.fromDate as string),
      // : null,
    });
  }, []);

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

    // setDates({ ...dates, toDate: null, fromDate: null });

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

  const [dates, setDates] = useState<{
    toDate: dayjs.Dayjs | null;
    fromDate: dayjs.Dayjs | null;
  }>({ toDate: null, fromDate: null });

  const handleChangeFromDate = (date: dayjs.Dayjs | null) => {
    setDates({ ...dates, fromDate: date });
  };

  const handleChangeToDate = (date: dayjs.Dayjs | null) => {
    setDates({ ...dates, toDate: date });
  };

  console.log(dates);

  if (!dates) return null;
  return (
    <div
      style={{ padding: 8 }}
      onKeyDown={(e) => e.stopPropagation()}
      className="w-80"
    >
      {contextHolder}
      <Form
        layout="vertical"
        onFinish={(values) => {
          onFinish({ confirm, ...values });
        }}
        form={form}
        autoComplete="off"
      >
        <Row className="mb-4" dir="rtl" gutter={8}>
          <Col span={12}>
            <FormItem name="fromDate" label={`${t("general.fromDate")}`}>
              <IJalaliDatePicker
                placeholder={`${t("general.fromDate")}`}
                value={dayjs()}
                onChange={handleChangeFromDate}
              />
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem name="toDate" label={`${t("general.toDate")}`}>
              <IJalaliDatePicker
                placeholder={`${t("general.toDate")}`}
                value={dates?.toDate}
                defaultValue={dates?.toDate || undefined}
                onChange={handleChangeToDate}
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
              // onClick={() => clearFilters && handleReset(clearFilters, confirm)}
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
  );
};

export default DateFilter1;
