import { Input, InputProps } from "antd";

import { TextAreaProps } from "antd/es/input";

export interface Props extends TextAreaProps {
  isPassword?: boolean;
}

const ITextArea = ({ className, ...props }: Props) => {
  return (
    <Input.TextArea
      className={` placeholder:!text-theme-placeholder placeholder:!text-sm rounded-md focus:!shadow-none ${className}`}
      {...props}
    />
  );
};

export default ITextArea;
