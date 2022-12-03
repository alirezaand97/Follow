import { Drawer, DrawerProps } from "antd";

interface Props extends DrawerProps {}

const IDrawer = ({ children, ...props }: Props) => {
  return <Drawer {...props}>{children}</Drawer>;
};

export default IDrawer;
