import { MenuProps } from "antd";
import { debounce } from "lodash";
import { useMemo } from "react";

type Props = {};

const useFilterMenu = () => {
  const filterMenu = useMemo(
    () =>
      debounce((search: string, menuList: any) => {
        let finalMenuList: MenuProps["items"] = [];
        if (!menuList) return;

        if (!search) return menuList;

        for (let menuItem in menuList) {
          let menuChildren = menuList[menuItem]["children"];
          for (let child in menuChildren) {
            if (
              (menuChildren[child]["title"] as string)
                .trim()
                .includes(search.trim())
            ) {
              // if (finalMenuList.length && finalMenuList.filter((i) => i))
              finalMenuList = [
                ...finalMenuList,
                { ...menuList[menuItem], children: [menuChildren[child]] },
              ];
            }
          }
        }
        return finalMenuList;
      }, 500),
    []
  );

  return [filterMenu];
};

export default useFilterMenu;
