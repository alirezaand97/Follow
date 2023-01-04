import { Tabs, Tooltip } from "antd";

import Documents from "./documents";
import LibraryIcon from "@/components/icons/library";
import React from "react";
import RequestHistory from "./request-history";
import ScheduleIcon from "@/components/icons/schedule";
import { Tab } from "rc-tabs/lib/interface";
import UserDocsIcon from "@/components/icons/user_docs";
import UserIcon from "@/components/icons/user";
import UserInfo from "./user-info";
import Username from "./username";
import { t } from "i18next";

type Props = {};

const TabItems = (props: Props) => {
  const tabItems: Tab[] = [
    {
      label: (
        <Tooltip placement="left" title={t("general.userInfo")}>
          <LibraryIcon />
        </Tooltip>
      ),
      key: "1",
      children: <UserInfo />,
    },
    {
      label: (
        <Tooltip placement="left" title={t("general.stateHistory")}>
          <ScheduleIcon />
        </Tooltip>
      ),
      key: "2",
      children: <RequestHistory />,
    },
    {
      label: (
        <Tooltip placement="left" title={t("general.username")}>
          <UserIcon />
        </Tooltip>
      ),
      key: "3",
      children: <Username />,
    },
    {
      label: (
        <Tooltip placement="left" title={t("general.userDocs")}>
          <UserDocsIcon />
        </Tooltip>
      ),
      key: "4",
      children: <Documents />,
    },
  ];
  return (
    <Tabs
      className="h-full"
      tabBarStyle={{ height: "100%", width: "70px", background: "#f5f8fa" }}
      tabPosition="right"
      items={tabItems}
    />
  );
};

export default TabItems;
