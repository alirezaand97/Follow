import { DateObject, Value } from "react-multi-date-picker";

import PersianDigitReplacer from "./persianDigitReplacer";

const convertDateToJalali = (date: Value) => {
  return PersianDigitReplacer((date as DateObject).format("YYYY-MM-DD"));
};

export default convertDateToJalali;
