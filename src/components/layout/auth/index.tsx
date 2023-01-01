import { FormItem, IButton, IInput } from "@/components/general";
import React, { ReactNode } from "react";

import AgahLogo from "@/components/icons/logo";
import { Form } from "antd";
import { MdOutlinePersonOutline } from "react-icons/md";
import { englishChar } from "@/constant/regex_format";
import { useI18Next } from "@/i18n/index";
import useRules from "@/utils/rules";

type Props = {
  children: ReactNode;
};

const AuthLayout = (props: Props) => {
  const { t } = useI18Next();
  return (
    <div className="min-h-screen h-full bg-gray-100 text-gray-900 flex justify-center sm:p-20">
      <div className="max-w-screen-xl  m-0 h-full  shadow-sm overflow-hidden bg-white  sm:rounded-lg flex justify-center flex-1 flex-row-reverse">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 h-full overflow-y-auto iscroll">{props.children}</div>
        <div className="flex-1 bg-gradient-to-tl from-blue-500 to-blue-700 text-center hidden lg:flex"></div>
      </div>
    </div>
  );
};

export default AuthLayout;
