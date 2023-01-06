import { Dropdown, DropdownProps } from "antd";
import React, { ReactNode } from "react";

interface Props extends DropdownProps {
  children: ReactNode;
  content?: ReactNode;
}

const IDropDown = ({ overlayClassName, ...props }: Props) => {
  return (
    <Dropdown
      overlayClassName={`idropdown-wrapper ${overlayClassName}`}
      trigger={["click"]}
      dropdownRender={(menu) => (
        <div>
          {menu}
          <div>{props.content}</div>
        </div>
      )}
      {...props}
    >
      {props.children}
    </Dropdown>
  );
};

export default IDropDown;
