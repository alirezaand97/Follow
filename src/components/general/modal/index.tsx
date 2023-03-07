import { Modal, ModalProps } from "antd";

import CloseIcon from "@/components/icons/close";
import React from "react";
import { t } from "i18next";
import { useI18Next } from "@/i18n";

interface Props extends ModalProps {}
const IModal = (props: Props) => {
  const { t } = useI18Next();
  return (
    <Modal
      {...props}
      closeIcon={<CloseIcon />}
      cancelText={t("general.cancel")}
    />
  );
};

export default IModal;
