import { Button, ButtonProps } from "antd";

import React from "react";

interface Props extends ButtonProps {}

const IButton = ({ children, className, ...props }: Props) => {
  return (
    <Button
      className={`px-4 !text-xs py-2 h-auto hover:bg-inherit ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export default IButton;
