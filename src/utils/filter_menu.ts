import { MenuProps } from "antd";
import { t } from "i18next";

export const filterMenu = (search: string, menuList: any) => {
  let arr: Array<any> = [...menuList];
  for (let i in menuList) {
    let menuChild = menuList[i].children;
    if (menuChild) {
      arr = [...arr, ...menuChild];
      for (let j in menuChild) {
        let grandChild = menuChild[j].children;
        if (grandChild) {
          arr = [...arr, ...grandChild];
        }
      }
    }
  }
  let filterRes = arr.filter((i) => (i.title as string).includes(search));
  const res = search
    ? filterRes?.length
      ? filterRes
      : [{ label: t("general.notFound"), disabled: true }]
    : menuList;
  return res;
};
