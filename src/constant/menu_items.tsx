import ChartLine from "@/components/icons/chart_line";
import Comode from "@/components/icons/comode";
import CompassIcon from "@/components/icons/compass";
import LocationIcon from "@/components/icons/location";
import SettingIcon from "@/components/icons/setting";
import SettingTwoIcon from "@/components/icons/setting_two";
import UserIcon from "@/components/icons/user";
import pageNames from "./page_names";
import { useI18Next } from "@/i18n";

const useMenuItems = () => {
  const { t } = useI18Next();
  return [
    {
      key: "registrationPanel",
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
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              درخواست های ثبت نام
            </span>
          ),
          className: "hover:!bg-gray-100 group/child !mt-2 !text-right",
        },
        {
          key: "3",
          label: (
            <span className="text-base  group-hover/child:text-primary-200">
              تنظیمات انواع پیگیری
            </span>
          ),
          className: "hover:!bg-gray-100 group/child !mt-2 !text-right",
        },

        {
          key: "4",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              شهرهای ترابر
            </span>
          ),
          className: "hover:!bg-gray-100 group/child !mt-2 !text-right",
        },
        {
          key: "5",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              تنظیمات شعب
            </span>
          ),
          className: "hover:!bg-gray-100 group/child !mt-2 !text-right",
        },
        {
          key: "6",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              مراکز احراز هویت
            </span>
          ),
          className: "hover:!bg-gray-100 group/child !mt-2 !text-right",
        },
        {
          key: "7",
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              عملکرد دفاتر احراز هویت
            </span>
          ),
          className: "hover:!bg-gray-100 group/child !mt-2 !text-right",
        },
      ],
    },
  ];
};

export default useMenuItems;
