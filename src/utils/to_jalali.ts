import moment from "moment-jalaali";

export const toJalali = (d?: string) => {
  const jalali = moment(d, "YYYY-MM-DD").format("jYYYY-jMM-jDD HH:mm");
  return jalali;
};

export default toJalali;
