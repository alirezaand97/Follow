import * as dayjs from "dayjs";

import DatePicker, {
  CalendarProps,
  DateObject,
  DatePickerProps,
} from "react-multi-date-picker";

import PersianDigitReplacer from "@/utils/persianDigitReplacer";
import { PickerProps } from "antd/es/date-picker/generatePicker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

const IJalaliDatePicker = (props: CalendarProps & DatePickerProps) => {


  return (
    <DatePicker
      calendar={persian}
      locale={persian_fa}
      arrow={false}
      inputClass="text-sm w-full border border-gray-200 px-2 py-1.5 rounded-md outline-none"
      containerClassName="w-full"
      className="i-rmdp"
      calendarPosition="bottom-end"
      showOtherDays={true}
      format="YYYY-MM-DD"
      {...props}
    />
  );
};

export default IJalaliDatePicker;
