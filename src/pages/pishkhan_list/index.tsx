import { MainLayout } from "@/components/layout";
import PishkhanListTable from "@/components/container/pishkhan_list";

type Props = {};

const PishkhanList = (props: Props) => {
  return (
    <MainLayout>
      <PishkhanListTable />
    </MainLayout>
  );
};

export default PishkhanList;
