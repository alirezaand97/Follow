import { MainLayout } from "@/components/layout";
import RegistrationRequestTable from "@/components/container/registration_request";

type Props = {};

const RegistrationRequest = (props: Props) => {
  

  return (
    <MainLayout>
      <RegistrationRequestTable />
    </MainLayout>
  );
};

export default RegistrationRequest;
