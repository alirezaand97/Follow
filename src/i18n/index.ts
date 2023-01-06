import { initReactI18next, useTranslation } from "react-i18next";

import en from "./en";
import fa from "./fa";
import i18n from "i18next";

const resources = { en: { translation: en }, fa: { translation: fa } };

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: "fa",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

export const useI18Next = () => useTranslation();
export const getCurrentLanguage = (): "fa" | "en" =>
  i18n.language === "fa" ? "fa" : "en";
export const changeLanguage = () => i18n.changeLanguage;
