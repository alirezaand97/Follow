import ChartLine from "@/components/icons/chart_line";
import Comode from "@/components/icons/comode";
import CompassIcon from "@/components/icons/compass";
import LocationIcon from "@/components/icons/location";
import SettingIcon from "@/components/icons/setting";
import SettingTwoIcon from "@/components/icons/setting_two";
import UserIcon from "@/components/icons/user";
import pageNames from "./page_names";
import { useI18Next } from "@/i18n";
import { useLocation } from "react-router-dom";

const useMenuItems = () => {
  const { t } = useI18Next();

  const { pathname } = useLocation();

  return [
    {
      key: "registration",
      title: "پنل ثبت نام",
      icon: <UserIcon className="w-6" color="group-hover:fill-primary-200" />,
      label: (
        <span className="text-base group-hover:text-primary-200">
          پنل ثبت نام
        </span>
      ),
      className: "group !mt-2 !text-right",
      children: [
        {
          key: pageNames.registrationRequest,
          title: "درخواست های ثبت نام",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              درخواست های ثبت نام
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right`,
        },
        {
          key: "3",
          title: "          تنظیمات انواع پیگیری",
          label: (
            <span className="text-base  group-hover/child:text-primary-200">
              تنظیمات انواع پیگیری
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right `,
        },

        {
          key: "4",
          title: "              شهرهای ترابر          ",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              شهرهای ترابر
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right `,
        },
        {
          key: "5",
          title: "              تنظیمات شعب          ",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              تنظیمات شعب
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right `,
        },
        {
          key: "6",
          title: "              مراکز احراز هویت          ",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              مراکز احراز هویت
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right `,
        },
        {
          key: "7",
          title: "              عملکرد دفاتر احراز هویت          ",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              عملکرد دفاتر احراز هویت
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right `,
        },
      ],
    },
  ];
};

export default useMenuItems;
