import { Avatar, Divider, Menu } from "antd";

import AgahSign from "@/components/icons/agah_sign";
import React from "react";
import UserIcon from "@/components/icons/user";

type Props = {};

const UserMenuItems = (props: Props) => {
  return (
    <>
      <Menu>
        <Menu.Item className="!flex">
          <div className="flex items-center">
            <Avatar
              size="large"
              shape="square"
              className="bg-gray-100 flex items-center"
            >
              <AgahSign className="w-5 h-5" />
            </Avatar>
            <div className="mr-3">علیرضا علی نیا</div>
          </div>
        </Menu.Item>
        <Divider dashed className="my-2" />
        <Menu.Item key="two" className="!mt-2">
          بازنشانی گذرواژه
        </Menu.Item>
        <Menu.Item key="three" className="!mt-2">
          خروج از حساب کاربری{" "}
        </Menu.Item>
      </Menu>
    </>
  );
};

export default UserMenuItems;
