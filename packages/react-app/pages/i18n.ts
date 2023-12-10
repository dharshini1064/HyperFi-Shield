import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "../pages/en.json";

const resources = {
  en,
};

i18n.use(initReactI18next).use(LanguageDetector).init({
  resources,
  defaultNS: "common",
  fallbackLng: "en",
});

export const availableLanguages = Object.keys(resources);
const I18nProvider = () => {
  return;
};

export default I18nProvider;
