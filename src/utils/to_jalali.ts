import moment from "moment-jalaali";

export const toJalali = (d?: string) => {
  const jalali = moment(d, "jYYYY/jMM/jDD");
  return jalali;
};

export default toJalali;
