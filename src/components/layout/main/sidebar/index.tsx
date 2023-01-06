import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store";

import AgahLogo from "@/components/icons/logo";
import DoubleArrow from "@/components/icons/double_arrow";
import { IInput } from "@/components/general";
import { Menu } from "antd";
import SearchIcon from "@/components/icons/search";
import Sider from "antd/es/layout/Sider";
import { debounce } from "lodash";
import { filterMenu } from "@/utils/filter_menu";
import { theme } from "@/constant/theme";
import { toggleCollapseSideBar } from "@/store/drawers";
import { useI18Next } from "@/i18n";
import useMenuItems from "@/constant/menu_items";
import { useNavigate } from "react-router-dom";

const ISideBar = () => {
  const menuItems = useMenuItems();

  const { t } = useI18Next();

  const navigate = useNavigate();

  const [searchValue, setSearchValue] = useState<string>("");
  const dispatch = useAppDispatch();

  const collapsedDrawer = useAppSelector((s) => s.drawers.sideBar.collapsed);

  const handleToggleSideBar = () => {
    dispatch(toggleCollapseSideBar());
  };

  const handleFilterMenu = debounce((event: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, 500);

  return (
    <Sider
      trigger={null}
      theme="light"
      collapsible
      collapsed={collapsedDrawer}
      className=" h-screen !fixed right-0 top-0 bottom-0 z-20 bg-white lg:block hidden"
      width={theme.sideBarWidth}
    >
      <div className="relative h-full">
        <div
          className={`flex items-center ${collapsedDrawer ? "pr-0" : "pr-8"}`}
          style={{ height: theme.headerHeight }}
        >
          <AgahLogo className=" w-24 px-1" />
        </div>
        <div className="pt-8">
          {!collapsedDrawer && (
            <div className="w-4/5 mx-auto mb-2">
              <IInput
                onChange={handleFilterMenu}
                suffix={<SearchIcon className="w-4" />}
                placeholder={t("general.search")}
                allowClear
              />
            </div>
          )}
          <Menu
            mode="inline"
            className="m-0 px-2  !border-none"
            defaultOpenKeys={["registration"]}
            defaultSelectedKeys={["2"]}
            onClick={(info) => navigate(info.key)}
            items={filterMenu(searchValue, menuItems)}
          />
        </div>
      </div>
      <div
        className="trigger flex absolute bottom-0 right-full -mr-4 mb-8  w-8 h-8 bg-primary-200/60 rounded-sm  justify-center items-center "
        onClick={handleToggleSideBar}
      >
        <DoubleArrow
          className={`w-5 transition-all duration-300  cursor-pointer  ${
            collapsedDrawer ? "rotate-180" : ""
          }`}
          color="!fill-white"
        />
      </div>
    </Sider>
  );
};

export default ISideBar;
