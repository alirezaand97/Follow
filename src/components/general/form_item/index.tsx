import { Tooltip } from "antd";

export interface IInputProps {
  className?: string;
  label?: string;
  error?: string | boolean;
  children: JSX.Element;
  tooltip?: string;
}

const FormItem = ({
  className,
  label,
  error,
  tooltip,
  ...props
}: IInputProps) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between">
        <p>{label}</p>
        {!!tooltip && (
          <Tooltip title={tooltip}>
          </Tooltip>
        )}
      </div>
      {props.children}
      {error && <p className="text-red-1 text-sm">{error}</p>}
    </div>
  );
};

export default FormItem;
