import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: require("./en.json"),
    },
  },
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

/* import path from "path";

const i18config = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  localePath: path.resolve("./src/shared/translations/en.json"),
};

export default i18config;
 */
