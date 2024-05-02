import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { AvailableLanguages, getLanguage } from './languageService.ts';


const loadResources = async () : Promise<void> => {
  await getLanguage(AvailableLanguages.PT_BR).then((response : string) : void => {
    console.log('response', response);
    i18next.addResourceBundle(AvailableLanguages.PT_BR, 'translation', response, true);
  });
  await getLanguage(AvailableLanguages.EN_US).then((response : string) : void => {
    i18next.addResourceBundle(AvailableLanguages.EN_US, 'translation', response, true);
  });
}


i18next
  .use(initReactI18next)
  .init({
    lng: AvailableLanguages.PT_BR
  })
  .then(loadResources);
