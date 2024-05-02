import { getPrivateApi } from '../api/apiService.ts';
import { ApiRoutes } from '../constants/apiRoutes.ts';

export enum AvailableLanguages {
  EN_US = 'EN_US',
  PT_BR = 'PT_BR',
}

export const getLanguage = (language: AvailableLanguages): Promise<string> => {
  const languageInStorage: string | null = localStorage.getItem(language);
  if (languageInStorage) {
    return Promise.resolve(JSON.parse(languageInStorage));
  }

  const path: string = ApiRoutes.GET_LANGUAGE_BY_TYPE.replace('${languageType}', language);
  return getPrivateApi({ path: path }).then(
    (response) => {
      const languageResponse: string = JSON.stringify(response.data);
      localStorage.setItem(language, languageResponse);
      return response.data;
    }
  );

};




