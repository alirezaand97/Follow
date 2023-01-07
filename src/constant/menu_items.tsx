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
      title: t("general.registerationPanel"),
      icon: <UserIcon className="w-6" color="group-hover:fill-primary-200" />,
      label: (
        <span className="text-base group-hover:text-primary-200">
          {t("general.registerationPanel")}
        </span>
      ),
      className: "group !mt-2 !text-right",
      children: [
        {
          key: pageNames.registrationRequest,
          title: t("general.registrationRequests"),
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              {t("general.registrationRequests")}
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right`,
        },
        {
          key: "5",
          title: t("general.branchSetting"),
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              {t("general.branchSetting")}{" "}
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right `,
        },
        {
          key: "6",
          title: t("general.counterList"),
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              {t("general.counterList")}{" "}
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right `,
        },
        {
          key: "7",
          title: t("general.revenueOfAuthCenter"),
          label: (
            <span className="text-base group-hover/child:text-primary-200">
              {t("general.revenueOfAuthCenter")}{" "}
            </span>
          ),
          className: `hover:!bg-gray-100 group/child !mt-2 !text-right `,
        },
      ],
    },
  ];
};

export default useMenuItems;
