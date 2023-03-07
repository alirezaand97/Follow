import { Col, Row, message } from "antd";
import { ColumnType, FilterConfirmProps } from "antd/lib/table/interface";
import { parse, stringifyUrl } from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { DateObject } from "react-multi-date-picker";
import FilterDateDropdown from "./finter_date_dropdown";
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

const useColumnDateFilter = () => {
  const { t } = useI18Next();
  const { search } = useLocation();

  let qs = parse(search) as any;

  const now = new DateObject({
    calendar: persian,
    locale: persian_fa,
  });

  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();

  const getColumnDateProps = (dataindex: string): ColumnType<any> => ({
    filterDropdown: ({ confirm }) => (
      <FilterDateDropdown dataindex={dataindex} confirm={confirm} />
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
  });

  return getColumnDateProps;
};

export default useColumnDateFilter;
