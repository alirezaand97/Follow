import * as dayjs from "dayjs";

import { ConfigProvider, DatePicker } from "antd";
import { JalaliLocaleListener, DatePicker as JalaliPicker } from "antd-jalali";

import { MdOutlineDateRange } from "react-icons/md";
import { PickerProps } from "antd/es/date-picker/generatePicker";
import fa_IR from "antd/lib/locale/fa_IR";

const IJalaliDatePicker = ({
  className,
  ...props
}: PickerProps<dayjs.Dayjs>) => {
  dayjs.locale("fa");

  return (
    <ConfigProvider locale={fa_IR}>
      <JalaliLocaleListener />
      <DatePicker className={`w-full ${className}`} {...props} />
    </ConfigProvider>
  );
};

export default IJalaliDatePicker;
