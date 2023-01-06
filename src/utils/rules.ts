import { englishChar, passwordRegex } from "@/constant/regex_format";

import { FormRule } from "antd";
import { useI18Next } from "@/i18n";

type Props = {};

const useRules = () => {
  const { t } = useI18Next();

  const userNameRule = (isRequired = true): FormRule[] => [
    { required: isRequired },
    {
      pattern: new RegExp(englishChar),
      message:
        t("messages.justEnglishNumericChar", {
          field: t("general.username"),
        }) || "",
    },
    { min: 6 },
  ];

  const passwordRule = (isRequired = true): FormRule[] => [
    { required: isRequired },
    {
      pattern: new RegExp(passwordRegex),
      message:
        t("messages.passwordRegexError", {
          field: t("general.username"),
        }) || "",
    },
  ];

  return { userNameRule, passwordRule };
};

export default useRules;
