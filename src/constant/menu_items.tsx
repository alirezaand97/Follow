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
      key: pageNames.registrationRequest,
      icon: <UserIcon className="w-6" color="group-hover:fill-primary-100" />,
      label: (
        <span className="text-base group-hover:text-primary-100">
          درخواست های ثبت نام
        </span>
      ),
      className: "hover:!bg-gray-100 group !mt-2",
    },
    {
      key: "2",
      icon: <Comode className="w-6" color="group-hover:fill-primary-100" />,
      label: (
        <span className="text-base group-hover:text-primary-100">
          درخواست های پیگیری
        </span>
      ),
      className: "hover:!bg-gray-100 group !mt-2",
    },
    {
      key: "3",
      icon: (
        <SettingIcon className="w-6" color="group-hover:fill-primary-100" />
      ),
      label: (
        <span className="text-base  group-hover:text-primary-100">
          تنظیمات انواع پیگیری
        </span>
      ),
      className: "hover:!bg-gray-100 group !mt-2",
    },

    {
      key: "4",
      icon: (
        <CompassIcon className="w-6" color="group-hover:fill-primary-100" />
      ),
      label: (
        <span className="text-base group-hover:text-primary-100">
          شهرهای ترابر
        </span>
      ),
      className: "hover:!bg-gray-100 group !mt-2",
    },
    {
      key: "5",
      icon: (
        <SettingTwoIcon className="w-6" color="group-hover:fill-primary-100" />
      ),
      label: (
        <span className="text-base group-hover:text-primary-100">
          تنظیمات شعب
        </span>
      ),
      className: "hover:!bg-gray-100 group !mt-2",
    },
    {
      key: "6",
      icon: (
        <LocationIcon className="w-6" color="group-hover:fill-primary-100" />
      ),
      label: (
        <span className="text-base group-hover:text-primary-100">
          مراکز احراز هویت
        </span>
      ),
      className: "hover:!bg-gray-100 group !mt-2",
    },
    {
      key: "7",
      icon: <ChartLine className="w-6" color="group-hover:fill-primary-100" />,
      label: (
        <span className="text-base group-hover:text-primary-100">
          عملکرد دفاتر احراز هویت
        </span>
      ),
      className: "hover:!bg-gray-100 group !mt-2",
    },
  ];
};

export default useMenuItems;
