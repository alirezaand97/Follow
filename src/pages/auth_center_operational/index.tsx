import AuthCenterOperationalTable from "@/components/container/auth_center_operational";
import { MainLayout } from "@/components/layout";

type Props = {};

const AuthCenterOperational = (props: Props) => {
  return (
    <MainLayout>
      <AuthCenterOperationalTable />
    </MainLayout>
  );
};

export default AuthCenterOperational;
