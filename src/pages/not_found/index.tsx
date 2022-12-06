import { Button, Result } from "antd";

import React from "react";
import { pageNames } from "@/constant";
import { useI18Next } from "@/i18n";
import { useNavigate } from "react-router-dom";

type Props = {};

const NotFound = (props: Props) => {
  const { t } = useI18Next();
  const navigate = useNavigate();
  const handleBackHome = () => {
    navigate(pageNames.home);
  };
  return (
    <div className="flex justify-center items-center h-full">
      <Result
        status="404"
        title={<div className="text-xxl">404</div>}
        subTitle={
          <div className="text-base">{t("messages.NotFoundErrorPage")}</div>
        }
        extra={
          <Button type="primary" onClick={handleBackHome}>
            {t("general.comeBack")}
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
