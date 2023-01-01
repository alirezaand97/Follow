import { MainLayout } from "@/components/layout";
import RegistrationRequestDetailDrawer from "@/components/modals/register_request";
import RegistrationRequestTable from "@/components/container/registration_request";

type Props = {};

const RegistrationRequest = (props: Props) => {
  return (
    <MainLayout>
      <RegistrationRequestTable />
      <RegistrationRequestDetailDrawer />
    </MainLayout>
  );
};

export default RegistrationRequest;
