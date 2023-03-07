import { Form, Input } from "antd";
import { FormItem, IButton, IInput, ISelect } from "@/components/general";

import IModal from "@/components/general/modal";
import ITextArea from "@/components/general/textarea";
import React from "react";
import { useGetNoteReasonListQuery } from "@/store/service/registrationRequest";
import { useI18Next } from "@/i18n";

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface CollectionCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CreateNote: React.FC<CollectionCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const { t } = useI18Next();

  const { data: reasonOptions } = useGetNoteReasonListQuery();

  return (
    <IModal
      open={open}
      title={t("general.newNote")}
      okText={t("general.submit")}
      onCancel={() => {
        form.resetFields();
        onCancel && onCancel();
      }}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {});
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{ reason: "", description: "" }}
      >
        <FormItem
          name="reason"
          label={t("general.reason")}
          rules={[
            {
              required: true,
              message:
                t("messages.required", { field: t("general.reason") }) || "",
            },
          ]}
        >
          <ISelect options={reasonOptions} showSearch={true} />
        </FormItem>
        <FormItem name="description" label={t("general.description")}>
          <ITextArea rows={3} />
        </FormItem>
      </Form>
    </IModal>
  );
};

export default CreateNote;
