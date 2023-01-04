import { IButton, IDropdown } from "@/components/general";

import React from "react";
import UserIcon from "@/components/icons/user";
import UserMenuItems from "./menu_items";

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <IDropdown overlayClassName="w-60 mt-2" content={<UserMenuItems />}>
      <IButton
        type="text"
        className="!p-1 lg:!p-3 mx-1.5 md:mx-2 group bg-gray-100 h-auto"
      >
        <UserIcon />
      </IButton>
    </IDropdown>
  );
};

export default UserMenu;
