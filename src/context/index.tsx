import  { Context, createContext } from 'react';
import { useTranslation } from 'react-i18next';
import { AvailableLanguages } from '../language/languageService.ts';

export type AuthContextType = {
  changeLanguage: () => void;
}

export const AuthContext: Context<AuthContextType> = createContext<AuthContextType>({
  changeLanguage: () => {}
} as AuthContextType);

export const AuthContextProvider = ({ children } : any ) => {
  const { i18n } = useTranslation();

  const changeLanguage = () : void => {
    const lng : AvailableLanguages = i18n.language === AvailableLanguages.EN_US ? AvailableLanguages.PT_BR  : AvailableLanguages.EN_US;
    i18n.changeLanguage(lng).then((): {} => ({}));
  };

  return (
    <AuthContext.Provider value={{
      changeLanguage
    }}>
      {children}
    </AuthContext.Provider>
  );
};
