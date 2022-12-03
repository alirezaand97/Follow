import { Table, TableProps } from "antd";

import useCheckMobileScreen from "@/utils/useCheckMobile";

interface Props<T> extends TableProps<T> {}

function ITable<T extends object>({ columns, pagination, ...props }: Props<T>) {
  const isMobile = useCheckMobileScreen();

  if (isMobile) return null;
  return (
    <div>
      <Table<T>
        showSorterTooltip={false}
        pagination={{
          onChange: (page) => console.log(page),
          current: 2,
          showSizeChanger: true,
          showLessItems: true,
        }}
        {...props}
      />
    </div>
  );
}

export default ITable;
