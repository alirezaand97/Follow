import { Col, Form, Row, message } from "antd";
import { ColumnType, FilterConfirmProps } from "antd/lib/table/interface";
import dayjs, { Dayjs } from "dayjs";
import { parse, stringifyUrl } from "query-string";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import DateFilter from "./dateFilter1";
import DateFilter1 from "./dateFilter1";
import FormItem from "../form_item";
import IButton from "../button";
import IJalaliDatePicker from "../date_picker";
import { MdOutlineCalendarToday } from "react-icons/md";
import { useI18Next } from "@/i18n";

type Props = {};

interface FormProps {
  fromDate: dayjs.Dayjs;
  toDate: dayjs.Dayjs;
  filteredDate: string;
  confirm: (param?: FilterConfirmProps) => void;
}

const useColumnDateFilter = (dataIndex: any) => {
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

  // console.log(dates, dataIndex);

  const getColumnDateProps = (title?: string): ColumnType<any> => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
      close,
    }) => <DateFilter1 />,
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
    // onFilterDropdownOpenChange: (visible) => {
    //   console.log(visible && dataIndex == qs?.filteredDate && qs?.toDate);

    //   visible
    //     ? setDates((d) => ({
    //         ...d,
    //         toDate: dayjs(qs?.toDate as string),
    //         fromDate: dayjs(qs?.fromDate as string),
    //       }))
    //     : setDates((d) => ({ ...d, toDate: null, fromDate: null }));
    // },
  });

  return getColumnDateProps;
};

export default useColumnDateFilter;
