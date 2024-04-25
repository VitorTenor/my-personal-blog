import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AvailableLanguages, getLanguage } from './languageService.ts';


const loadResources = async () => {
  i18next.addResourceBundle(AvailableLanguages.PT_BR, 'translation', await getLanguage(AvailableLanguages.PT_BR));
  i18next.addResourceBundle(AvailableLanguages.EN_US, 'translation', await getLanguage(AvailableLanguages.EN_US));
}

i18next
  .use(initReactI18next)
  .init({
    lng: AvailableLanguages.PT_BR
  })
  .then(loadResources);
