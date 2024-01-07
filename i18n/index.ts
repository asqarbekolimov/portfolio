import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import backend from 'i18next-http-backend';

i18n
  .use(initReactI18next)
  .use(detector)
  .use(backend)
  .init({
    ns: ['index', 'about', 'project'],
    backend: { loadPath: '/locales/{{lng}}/{{ns}}.json' },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
    detection: { order: ['cookie', 'localstorage'], caches: ['cookie'] },
  });

export default i18n;
