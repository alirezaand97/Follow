import { Input, InputProps } from "antd";

export interface IInputProps extends InputProps {
  isPassword?: boolean;
}

const IInput = ({ isPassword, className, ...props }: IInputProps) => {
  if (isPassword)
    return <Input.Password className={`mt-1 py-2 ${className}`} {...props} />;
  return (
    <Input
      className={`mt-1 py-2 placeholder:text-theme-placeholder rounded-md focus:!shadow-none ${className}`}
      {...props}
    />
  );
};

export default IInput;
