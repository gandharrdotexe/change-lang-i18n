// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome_message: "Welcome to my website !",
      change_language: "Change Language"
    }
  },
  hi: {
    translation: {
      welcome_message: "मेरी वेबसाइट पर आपका स्वागत है !",
      change_language: "भाषा बदलें"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // default language English code 
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
