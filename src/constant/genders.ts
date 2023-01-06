import SelectOption from "@/models/select_option.models";
import { useI18Next } from "@/i18n";

const useGenders = (): SelectOption[] => {
  const { t } = useI18Next();
  return [
    { label: t("general.woman"), value: 0 },
    { label: t("general.man"), value: 1 },
  ];
};

export default useGenders;
