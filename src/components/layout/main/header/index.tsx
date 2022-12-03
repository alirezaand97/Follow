import { IButton, IInput } from "@/components/general";

import Chart from "@/components/icons/chat";
import ChartLine from "@/components/icons/chart_line";
import DoubleArrow from "@/components/icons/double_arrow";
import { Header } from "antd/es/layout/layout";
import NotificationIcon from "@/components/icons/notification";
import React from "react";
import SearchIcon from "@/components/icons/search";
import TicketIcon from "@/components/icons/ticket";
import UserIcon from "@/components/icons/user";
import { theme } from "@/constant/theme";
import { useI18Next } from "@/i18n";

type Props = {};

const IHeader = (props: Props) => {
  const { t } = useI18Next();
  return (
    <Header
      className="site-layout-background !bg-white sticky top-0 z-10 w-full !px-0 shadow-header"
      style={{ height: `${theme.headerHeight}px` }}
    >
      <div className="h-full w-full flex justify-between items-center">
        <div className="flex-1 grid grid-cols-3 px-8 items-center justify-center">
          <div className="col-span-1 max-w-md w-full">
            <IInput
              placeholder={t("general.search")}
              suffix={<SearchIcon />}
              allowClear
            />
          </div>
          <div className="col-span-2 flex items-center flex-row-reverse">
            <IButton type="text" className="!p-3 mx-2 group bg-gray-100">
              <UserIcon />
            </IButton>
            <IButton type="text" className="!p-2 mx-2 group">
              <NotificationIcon />
            </IButton>
            <IButton type="text" className="!p-2 mx-2 group">
              <TicketIcon />
            </IButton>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default IHeader;
