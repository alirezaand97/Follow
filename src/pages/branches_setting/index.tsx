import BranchesSettingTable from "@/components/container/branches_setting";
import { MainLayout } from "@/components/layout";

type Props = {};

const BranchesSetting = (props: Props) => {
  return (
    <MainLayout>
      <BranchesSettingTable />
    </MainLayout>
  );
};

export default BranchesSetting;
