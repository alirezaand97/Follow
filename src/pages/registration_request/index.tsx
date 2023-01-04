import { MainLayout } from "@/components/layout";
import RegistrationRequestDetailDrawer from "@/components/modals/register_request";
import RegistrationRequestTable from "@/components/container/registration_request";
import { pageNames } from "@/constant";
import { useI18Next } from "@/i18n";

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
