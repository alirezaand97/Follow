import "moment/locale/fa";

import { ReactNode, useState } from "react";

import IHeader from "./header";
import ISideBar from "./sidebar";
import { Layout } from "antd";
import { theme } from "@/constant/theme";
import { useAppSelector } from "@/store";

const { Content } = Layout;

type Props = {
  children?: ReactNode;
};

const MainLayout = (props: Props) => {
  const { sideBar, drawerStatus } = useAppSelector((s) => s.drawers);

  return (
    <Layout className="min-h-full">
      <ISideBar />

      <Layout
        className={`site-layout transition-all duration-200 ${
          sideBar.collapsed
            ? "mr-0 lg:mr-sideBarCollapsedWidth"
            : "mr-0 lg:mr-sideBarWidth"
        } 
        `}
        style={{
          marginLeft: drawerStatus.isOpen ? `${drawerStatus.width}px` : "0",
        }}
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
