import { Col, Form, Row, message } from "antd";
import { FormItem, IButton, ISelect } from "@/components/general";
import { parse, stringifyUrl } from "query-string";
import { useLocation, useNavigate } from "react-router-dom";

import { DefaultOptionType } from "antd/es/select";
import IJalaliDatePicker from "@/components/general/date_picker";
import { MdFilterAlt } from "react-icons/md";
import { ReactElement } from "react";
import dayjs from "dayjs";
import { useI18Next } from "@/i18n";

type Props = {
  filterdDateOptions?: DefaultOptionType[];
  extraFilter?: ReactElement;
};

interface FormProps {
  fromDate: dayjs.Dayjs;
  toDate: dayjs.Dayjs;
  filteredDate: string;
}

const DateFilterMenu = ({ filterdDateOptions, ...props }: Props) => {
  const { t } = useI18Next();

  const navigate = useNavigate();

  const { search } = useLocation();

  let qs = parse(search) as {
    fromDate: string;
    toDate: string;
    filteredDate: string;
  };

  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = ({
    toDate,
    fromDate,
    filteredDate,
    ...values
  }: FormProps) => {
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
      ...values,
    };
    navigate(
      stringifyUrl(
        { url: location.pathname, query: { ...qs } },
        { skipNull: true, skipEmptyString: true }
      )
    );
  };

  const isValidDate = (date: string) => {
    return date && dayjs(date).isValid();
  };

  const isValidDateRange = (fromDate: dayjs.Dayjs, toDate: dayjs.Dayjs) => {
    return toDate?.isAfter(fromDate);
  };

  const clearAllFIlters = () => {
    navigate(stringifyUrl({ url: location.pathname }));
  };

  return (
    <>
      {contextHolder}
      <Form onFinish={onFinish} autoComplete="off">
        <Row gutter={12}>
          <Col sm={6} md={4} xl={3}>
            <FormItem name="filteredDate">
              <ISelect
                options={filterdDateOptions}
                placeholder={t("general.date")}
                defaultValue={
                  qs?.filteredDate ||
                  (filterdDateOptions && filterdDateOptions[0])
                }
              ></ISelect>
            </FormItem>
          </Col>
          <Col sm={6} md={4} xl={3}>
            <FormItem name="fromDate">
              <IJalaliDatePicker
                placeholder={t("general.fromDate")}
                className="w-full"
                value={
                  isValidDate(qs?.fromDate as string)
                    ? dayjs(qs?.fromDate as string)
                    : undefined
                }
              />
            </FormItem>
          </Col>

          <Col sm={6} md={4} xl={3}>
            <FormItem name="toDate">
              <IJalaliDatePicker
                placeholder={t("general.toDate")}
                defaultValue={
                  isValidDate(qs?.toDate as string)
                    ? dayjs(qs?.toDate as string)
                    : undefined
                }
              />
            </FormItem>
          </Col>
          {props.extraFilter}

          <Col span={4} className="flex items-start">
            <IButton htmlType="submit" className="px-2 ml-2">
              <MdFilterAlt size={18} className="text-gray-500" />
            </IButton>
            <IButton type="text" danger onClick={clearAllFIlters}>
              {t("general.deleteFilters")}
            </IButton>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default DateFilterMenu;
