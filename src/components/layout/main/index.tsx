import "moment/locale/fa";

import { ReactNode, useState } from "react";

import IHeader from "./header";
import ISideBar from "./sidebar";
import { Layout } from "antd";
import { theme } from "@/constant/theme";

const { Content } = Layout;

type Props = {
  children?: ReactNode;
};

const MainLayout = (props: Props) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return (
    <Layout className="min-h-full">
      <ISideBar collapsed={collapsed} setCollapsed={setCollapsed} />

      <Layout
        className={`site-layout transition-all duration-200 ${
          collapsed
            ? "mr-0 lg:mr-sideBarCollapsedWidth"
            : "mr-0 lg:mr-sideBarWidth"
        } `}
        // style={{
        //   marginRight: `${
        //     collapsed ? theme.sideBarCollapsedWidth : theme.sideBarWidth
        //   }px`,
        // }}
      >
        <IHeader />
        <Content className="site-layout-background p-4 md:p-8">
          {props.children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
