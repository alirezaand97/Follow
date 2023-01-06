import React, { ReactNode } from "react";
import { Typography, TypographyProps } from "antd";

import { TitleProps } from "antd/es/typography/Title";

interface Props extends TitleProps {
  children: ReactNode;
}

const ITitle = ({ className, ...props }: Props) => {
  return (
    <Typography.Title
      className={`!font-normal font-yekanBold ${className}`}
      {...props}
    >
      {props.children}
    </Typography.Title>
  );
};

export default ITitle;
