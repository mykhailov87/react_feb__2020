import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
// import { locale } from '../../ui/_helpers/data/locale';
// Config
// const baseUrl = process.env.REACT_APP_API;
// const apiVersion = process.env.REACT_APP_API_VERSION;
// const saveMissingTranslate = process.env.REACT_APP_SAVE_MISSING_TRANSLATE === 'true';
// const i18nDebug = process.env.REACT_APP_I18N_DEBUG === 'true';
// const path = require('path');
import { resources } from '../../../static/translate'

const locale = {
  en: 'en',
  ru: 'ru',
  ua: 'ua',
};

// i18n
//   .use(initReactI18next)
//   .init({
//     lng: locale.en,
//     // preload: [locale.uk, locale.ru],
//     debug: true,
//     fallbackLng: locale.en,
//     saveMissing: false,
//     keySeparator: false,
//     resources,
//     react: {
//       bindStore: false,
//       bindI18n: 'languageChanged',
//       wait: false,
//     },
//     // backend: {
//     //   loadPath: saveMissingTranslate ? path.join(__dirname, '../../build/locales/{{lng}}/{{ns}}.json') : path.join(__dirname, '/locales/{{lng}}/{{ns}}.json'),
//     //   addPath: `${baseUrl}/api/${apiVersion}/translates`,
//     //   jsonIndent: 2,
//     // },
//   });

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: locale.ru,

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
