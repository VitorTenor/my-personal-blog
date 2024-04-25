import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AvailableLanguages, getLanguage } from './languageService.ts';

const resources : {} = {
  PT_BR: {
    translation: await getLanguage(AvailableLanguages.PT_BR)
  },
  EN_US: {
    translation: await getLanguage(AvailableLanguages.EN_US)
  }
}

i18next
  .use(initReactI18next)
  .init({
    resources: resources,
    lng: 'PT_BR',
    fallbackLng: 'EN_US'
  })
  .then();
