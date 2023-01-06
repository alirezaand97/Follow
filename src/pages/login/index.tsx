import { FormItem, IButton, IInput } from "@/components/general";

import AgahLogo from "@/components/icons/logo";
import AuthLayout from "@/components/layout/auth";
import { Form } from "antd";
import { LoginReqModel } from "@/models/auth";
import { MdOutlinePersonOutline } from "react-icons/md";
import React from "react";
import { englishChar } from "@/constant/regex_format";
import { pageNames } from "@/constant";
import { useI18Next } from "@/i18n/index";
import { useLoginUserMutation } from "@/store/service/auth";
import { useNavigate } from "react-router-dom";
import useRules from "@/utils/rules";

type Props = {};

const LoginPage = (props: Props) => {
  const [form] = Form.useForm();

  const navigate = useNavigate();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const handleLogin = async (values: LoginReqModel) => {
    const data = await loginUser(values).unwrap();
  };

  const { t } = useI18Next();
  return (
    <AuthLayout>
      <div className="mt-4 flex flex-col items-center">
        <h1 className="text-2xl xl:text-3xl font-yekanBold">
          {t("general.loginToAgah")}
        </h1>
        <div className="w-full flex-1 my-12 ">
          <div className="mx-auto max-w-sm">
            <Form
              layout="vertical"
              name="nest-messages"
              size="large"
              onFinish={handleLogin}
              form={form}
            >
              <FormItem name="username" label={t("general.username")}>
                <IInput
                  className="w-full py-3"
                  placeholder={t("general.username")}
                />
              </FormItem>
              <FormItem name="password" label={t("general.password")}>
                <IInput
                  className="w-full py-3"
                  isPassword={true}
                  placeholder={t("general.password")}
                />
              </FormItem>
              <FormItem name="captchaCode" label={t("general.captchaCode")}>
                <IInput
                  className="w-full py-3"
                  placeholder={t("general.captchaCode")}
                />
              </FormItem>
              <IButton
                className="mt-12  hover:!text-white bg-primary-200  text-gray-100 w-full !py-6 !text-base rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                size="large"
                htmlType="submit"
                disabled={isLoading}
              >
                {t("general.login")}
              </IButton>
            </Form>

            <div className="mt-8">
              <ul className="text-sm text-right text-slate-400 font-yekanMedium ">
                <li className="my-4">{t("messages.loginWarning1")}</li>
                <li className="my-4">{t("messages.loginWarning2")}</li>
                <li className="my-4">{t("messages.loginWarning3")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
