import { Input, InputProps } from "antd";

import { forwardRef } from "react";

export interface IInputProps extends InputProps {
  isPassword?: boolean;
}

const IInput = forwardRef(
  ({ isPassword, className, ...props }: IInputProps, ref: any) => {
    if (isPassword)
      return (
        <Input
          ref={ref}
          className={`placeholder:!text-theme-placeholder placeholder:!text-sm rounded-md focus:!shadow-none ${className}`}
          {...props}
        />
      );
    return (
      <Input
        ref={ref}
        className={` placeholder:!text-theme-placeholder placeholder:!text-sm rounded-md focus:!shadow-none ${className}`}
        {...props}
      />
    );
  }
);

export default IInput;
