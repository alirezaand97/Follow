import { Empty, Select, SelectProps } from "antd";

import ArrowDown from "@/components/icons/arrow_down";
import CloseIcon from "@/components/icons/close";
import { useI18Next } from "@/i18n";

interface Props extends SelectProps {}

const ISelect = (props: Props) => {
  const { t } = useI18Next();

  return (
    <Select
      className="w-full"
      clearIcon={<CloseIcon color="!fill-black" />}
      suffixIcon={<ArrowDown className="!w-4.5 !h-4.5 -mt-1 -ml-1.5" />}
      notFoundContent={
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={t("general.notFound")}
        />
      }
      {...props}
    />
  );
};

export default ISelect;
