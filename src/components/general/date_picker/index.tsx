import {
    DatePicker as DatePickerJalali,
    JalaliLocaleListener
} from "antd-jalali";

import { ConfigProvider } from "antd";
import fa_IR from "antd/lib/locale/fa_IR";

interface Props {}

const IJalaliDatePicker = (props: Props) => {
  return (
    <ConfigProvider locale={fa_IR}>
      <JalaliLocaleListener />
      <DatePickerJalali
        onChange={(value: any) => console.log(value.year())}
        size="large"
      />
    </ConfigProvider>
  );
};

export default IJalaliDatePicker;
