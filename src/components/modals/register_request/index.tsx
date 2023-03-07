import { IDrawer, ITable } from "@/components/general";
import { Tabs, TabsProps, Tooltip } from "antd";
import { useAppDispatch, useAppSelector } from "@/store";

import BookOpenIcon from "@/components/icons/book_open";
import LibraryIcon from "@/components/icons/library";
import React from "react";
import ScheduleIcon from "@/components/icons/schedule";
import TabItems from "./tabs/tab_items";
import UserIcon from "@/components/icons/user";
import { theme } from "@/constant/theme";
import { toggleRegisterRequestDetailDrawer } from "@/store/drawers";

type Props = {};

const RegistrationRequestDetailDrawer = (props: Props) => {
  const { isOpen, customerId } = useAppSelector(
    (s) => s.drawers.toggleRegisterRequestDetail
  );

  const dispatch = useAppDispatch();

  const handleCloseDrawer = () => {
    dispatch(
      toggleRegisterRequestDetailDrawer({
        isOpen: false,
        customerId: undefined,
      })
    );
  };

  return (
    <IDrawer
      destroyOnClose={true}
      open={isOpen}
      onClose={handleCloseDrawer}
      placement="left"
      bodyStyle={{ padding: "0" }}
      width={`${theme.drawerWidth}px`}
      maskClassName="!bg-transparent"
    >
      <TabItems />
    </IDrawer>
  );
};

export default RegistrationRequestDetailDrawer;
