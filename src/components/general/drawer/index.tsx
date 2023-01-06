import { Drawer, DrawerProps } from "antd";

import CloseIcon from "@/components/icons/close";

interface Props extends DrawerProps {}

const IDrawer = ({ children, ...props }: Props) => {
  return (
    <Drawer
      destroyOnClose={true}
      closeIcon={<CloseIcon />}
      headerStyle={{ padding: ".75rem", borderBottom: "1px dashed #eee" }}
      {...props}
    >
      {children}
    </Drawer>
  );
};

export default IDrawer;
