import moment from "moment-jalaali";

export const toJalali = (d?: string) => {
  const jalali = moment(d, "YYYY-MM-DD").format("HH:mm jYYYY-jMM-jDD");
  return jalali;
};

export default toJalali;
