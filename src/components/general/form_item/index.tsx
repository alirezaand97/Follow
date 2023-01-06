import { Form, FormItemProps } from "antd";

interface Props extends FormItemProps {}

const FormItem = (props: Props) => {
  return <Form.Item {...props} className="text-right" />;
};

export default FormItem;
