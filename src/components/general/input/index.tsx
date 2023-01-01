import { Input, InputProps } from "antd";

export interface IInputProps extends InputProps {
  isPassword?: boolean;
}

const IInput = ({ isPassword, className, ...props }: IInputProps) => {
  if (isPassword)
    return (
      <Input
        className={`placeholder:!text-theme-placeholder placeholder:!text-sm rounded-md focus:!shadow-none ${className}`}
        {...props}
      />
    );
  return (
    <Input
      className={` placeholder:!text-theme-placeholder placeholder:!text-sm rounded-md focus:!shadow-none ${className}`}
      {...props}
    />
  );
};

export default IInput;
