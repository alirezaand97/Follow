import AgahLogo from "@/components/icons/logo";
import AgahSign from "@/components/icons/agah_sign";
import DoubleArrow from "@/components/icons/double_arrow";
import FlowerIcon from "@/components/icons/flower";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { theme } from "@/constant/theme";
import useMenuItems from "@/constant/menu_items";
import { useNavigate } from "react-router-dom";

type Props = {
  collapsed: boolean;
  setCollapsed: (p: boolean) => void;
};

const ISideBar = ({ collapsed, setCollapsed }: Props) => {
  const menuItems = useMenuItems();
  const navigate = useNavigate();

  return (
    <Sider
      trigger={null}
      theme="light"
      collapsible
      collapsed={collapsed}
      className=" h-screen !fixed right-0 top-0 bottom-0 z-20 bg-white "
      width={theme.sideBarWidth}
    >
      <div className="relative h-full">
        <div
          className={`flex items-center ${collapsed ? "pr-0" : "pr-8"}`}
          style={{ height: theme.headerHeight }}
        >
          <AgahLogo className="w-32 px-1" />
        </div>
        <Menu
          mode="inline"
          className="m-0 px-2 pt-8 !border-none"
          selectedKeys={["3"]}
          onClick={(info) => navigate(info.key)}
          items={menuItems}
        />
        <div
          className="trigger absolute bottom-0 right-full -mr-4 mb-8  w-8 h-8 bg-primary-100/60 rounded-sm flex justify-center items-center "
          onClick={() => setCollapsed(!collapsed)}
        >
          <DoubleArrow
            className={`w-5 transition-all duration-300  cursor-pointer  ${
              collapsed ? "rotate-180" : ""
            }`}
            color="!fill-white"
          />
        </div>
      </div>
    </Sider>
  );
};

export default ISideBar;
