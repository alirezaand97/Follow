import { Button, message } from "antd";
import { MdChevronRight, MdOutlineChevronLeft } from "react-icons/md";
import dayjs, { Dayjs, ManipulateType } from "dayjs";
import { useEffect, useState } from "react";

import { AiOutlineSwapLeft } from "react-icons/ai";
import IJalaliDatePicker from "@/components/general/date_picker";
import { ISelect } from "@/components/general";
import { useI18Next } from "@/i18n";

type Props = {
  hasRenge?: boolean;
};

const DateRange = ({ hasRenge = false }: Props) => {
  const { t } = useI18Next();

  const [fromDate, setFromDate] = useState<Dayjs | null>();

  const [toDate, setToDate] = useState<Dayjs | null>();

  const [selectedRange, setSelectedRange] = useState<ManipulateType | "custom">(
    "custom"
  );

  const [messageApi, contextHolder] = message.useMessage();

  const handleChangeFromDate = (date: dayjs.Dayjs | null) => {
    setFromDate(date);
  };

  const handleChangeToDate = (date: dayjs.Dayjs | null) => {
    setToDate(date);
  };

  const handleIncreaseDate = () => {
    if (selectedRange == "custom") return;

    setFromDate((d) => d?.add(1, selectedRange));
    setToDate((d) => d?.add(1, selectedRange));
  };

  const validateDate = () => {
    if (!toDate || toDate?.isAfter(fromDate)) return;

    messageApi.open({
      type: "warning",
      content: t("messages.validateRangePicker"),
    });
  };

  useEffect(() => {
    validateDate();
  }, [toDate, fromDate]);

  const handleDecreaseDate = () => {
    if (selectedRange == "custom") return;
    setFromDate((d) => d?.subtract(1, selectedRange));
    setToDate((d) => d?.subtract(1, selectedRange));
  };

  const handleDateRange = (value: any) => {
    setSelectedRange(value);
    setToDate(dayjs());
    switch (value) {
      case "d":
        setFromDate(dayjs());
        setToDate(null);
        break;
      case "w":
        setFromDate(dayjs().subtract(1, "week"));
        break;
      case "month":
        setFromDate(dayjs().subtract(1, "month"));
        break;
      case "custom":
        setFromDate(null);
        setToDate(null);
        break;
    }
  };

  return (
    <>
      {contextHolder}
      <div className="flex items-center">
        {hasRenge && (
          <ISelect
            className=" w-24"
            value={selectedRange}
            options={[
              {
                value: "custom",
                label: t("general.selective"),
              },
              {
                value: "d",
                label: t("general.day"),
              },
              {
                value: "w",
                label: t("general.week"),
              },
              {
                value: "month",
                label: t("general.month"),
              },
            ]}
            onChange={handleDateRange}
          />
        )}
        {hasRenge && selectedRange != "custom" && (
          <Button
            icon={<MdChevronRight size={22} />}
            onClick={handleDecreaseDate}
            className="mr-2"
          />
        )}
        <IJalaliDatePicker
          placeholder="از تاریخ"
          className="mr-2 "
          value={fromDate}
          onChange={handleChangeFromDate}
        />
        <AiOutlineSwapLeft size={18} className="fill-gray-400 mx-2" />
        {selectedRange != "d" && (
          <IJalaliDatePicker
            placeholder="تا تاریخ"
            onChange={handleChangeToDate}
            // className="mr-2"
            value={toDate}
          />
        )}
        {hasRenge && selectedRange != "custom" && (
          <Button
            icon={<MdOutlineChevronLeft size={22} />}
            className="mr-2"
            onClick={handleIncreaseDate}
          />
        )}
      </div>
    </>
  );
};

export default DateRange;
