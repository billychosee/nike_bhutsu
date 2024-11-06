"use client";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import your translation files
import translationEN from "@/public/locales/en.json";
import translationAR from "@/public/locales/ar.json";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ar: {
        translation: translationAR,
      },
    },
    lng: "en", // Set the default language here
    fallbackLng: "en", // Fallback language if a translation key is not found
    interpolation: {
      escapeValue: false, // React already escapes everything
    },
  });

export default i18n;
