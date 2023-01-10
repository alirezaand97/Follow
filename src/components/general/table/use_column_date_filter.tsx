import { Col, Row, message } from "antd";
import { ColumnType, FilterConfirmProps } from "antd/lib/table/interface";
import { parse, stringifyUrl } from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { DateObject } from "react-multi-date-picker";
import IButton from "../button";
import IJalaliDatePicker from "../date_picker";
import { MdOutlineCalendarToday } from "react-icons/md";
import PersianDigitReplacer from "@/utils/persianDigitReplacer";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { useI18Next } from "@/i18n";

type Props = {};

interface FormProps {
  filteredDate: string;
  confirm: (param?: FilterConfirmProps) => void;
}

const useColumnDateFilter = (dataindex: string) => {
  const { t } = useI18Next();
  const { search } = useLocation();

  let qs = parse(search) as any;

  const now = new DateObject({
    calendar: persian,
    locale: persian_fa,
  });

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const [dates, setDates] = useState<{
    toDate: Value;
    fromDate: Value;
  }>({ toDate: now, fromDate: now });

  useEffect(() => {
    (qs?.toDate || qs?.fromDate) &&
      setDates({
        ...dates,
        toDate:
          dataindex == qs?.filteredDate
            ? new DateObject({
                date: qs?.toDate,
                calendar: persian,
                locale: persian_fa,
              })
            : now,
        fromDate:
          dataindex == qs?.filteredDate
            ? new DateObject({
                date: qs?.fromDate,
                calendar: persian,
                locale: persian_fa,
              })
            : now,
      });
  }, [qs?.toDate, qs?.fromDate]);

  const handleReset = (confirm: (param?: FilterConfirmProps) => void) => {
    qs = {
      ...qs,
      toDate: null,
      fromDate: null,
      filteredDate: null,
    };

    setDates({ ...dates, toDate: now, fromDate: now });

    navigate(
      stringifyUrl(
        { url: location.pathname, query: { ...qs } },
        { skipNull: true, skipEmptyString: true }
      )
    );

    confirm();
  };

  const onFinish = ({ confirm, filteredDate }: FormProps) => {
    qs = {
      ...qs,
      toDate: dates.toDate
        ? PersianDigitReplacer(
            (dates.toDate as DateObject).format("YYYY-MM-DD")
          )
        : null,
      fromDate: dates.fromDate
        ? PersianDigitReplacer(
            (dates.fromDate as DateObject).format("YYYY-MM-DD")
          )
        : null,
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

  const handleChangeFromDate = (date: Value) => {
    setDates((d) => ({ ...d, fromDate: date }));
  };

  const handleChangeToDate = (date: Value) => {
    setDates((d) => ({ ...d, toDate: date }));
  };

  const getColumnDateProps = (): ColumnType<any> => ({
    filterDropdown: ({ confirm }) => (
      <div
        style={{ padding: 8 }}
        onKeyDown={(e) => e.stopPropagation()}
        className="w-80"
      >
        {contextHolder}

        <Row className="mb-4" dir="rtl" gutter={8}>
          <Col span={12}>
            <IJalaliDatePicker
              placeholder={`${t("general.fromDate")}`}
              value={dates.fromDate}
              onChange={handleChangeFromDate}
            />
          </Col>
          <Col span={12}>
            <IJalaliDatePicker
              placeholder={`${t("general.toDate")}`}
              value={dates?.toDate}
              onChange={handleChangeToDate}
            />
          </Col>
        </Row>
        <Row className="flex-row-reverse" gutter={12}>
          <Col>
            <IButton
              size="small"
              htmlType="submit"
              style={{ width: 90 }}
              onClick={() =>
                onFinish({ confirm: confirm, filteredDate: dataindex })
              }
            >
              {t("general.search")}
            </IButton>
          </Col>
          <Col>
            <IButton
              onClick={() => handleReset(confirm)}
              size="small"
              style={{ width: 90 }}
              danger
            >
              {t("general.deleteFilters")}
            </IButton>
          </Col>
        </Row>
      </div>
    ),
    className: `${qs[dataindex] ? "bg-gray-100/60 font-bold" : ""}`,
    filterIcon: (filtered: boolean) => (
      <MdOutlineCalendarToday
        size={16}
        className={`${
          qs?.filteredDate == dataindex ? "fill-sky-600" : undefined
        }`}
      />
    ),
    defaultSortOrder:
      qs["sortField"] == dataindex && qs["sortOrder"]
        ? qs["sortOrder"]
        : undefined,
  });

  return getColumnDateProps;
};

export default useColumnDateFilter;
