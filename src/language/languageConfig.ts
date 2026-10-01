import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './constants/EN_US.json';
import translationBR from './constants/PT_BR.json';

const storedLanguage = localStorage.getItem('language');

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      pt: { translation: translationBR },
    },
    lng: storedLanguage === 'pt' ? 'pt' : 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then();
