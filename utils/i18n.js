import 'intl-pluralrules'; // Import the polyfill before importing i18next
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';
import en from './locales/en/translation.json';
import fr from './locales/fr/translation.json';

// Initialize i18n
i18n.use(initReactI18next).init({
  resources: {
    en: {translation: en},
    fr: {translation: fr},
  },
  lng: RNLocalize.getLocales()[0].languageTag, // Set default language
  fallbackLng: 'en', // Fallback language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
