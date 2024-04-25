import getApi from '../api/apiService.ts';

export enum AvailableLanguages {
  EN_US = 'EN_US',
  PT_BR = 'PT_BR',
}

export const getLanguage = async (language: AvailableLanguages): Promise<String> => {
  const response = await getApi({ path: `/getLanguageByType/${language}` });
  return response.data;
};




