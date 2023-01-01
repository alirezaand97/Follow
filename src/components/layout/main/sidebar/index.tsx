import { useAppDispatch, useAppSelector } from "@/store";

import AgahLogo from "@/components/icons/logo";
import AgahSign from "@/components/icons/agah_sign";
import DoubleArrow from "@/components/icons/double_arrow";
import FlowerIcon from "@/components/icons/flower";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { theme } from "@/constant/theme";
import { toggleCollapseSideBar } from "@/store/drawers";
import useMenuItems from "@/constant/menu_items";
import { useNavigate } from "react-router-dom";

const ISideBar = () => {
  const menuItems = useMenuItems();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const collapsedDrawer = useAppSelector((s) => s.drawers.sideBar.collapsed);

  const handleToggleSideBar = () => {
    dispatch(toggleCollapseSideBar());
  };

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
        <Menu
          mode="inline"
          className="m-0 px-2 pt-8 !border-none"
          selectedKeys={["3"]}
          onClick={(info) => navigate(info.key)}
          items={menuItems}
        />
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
