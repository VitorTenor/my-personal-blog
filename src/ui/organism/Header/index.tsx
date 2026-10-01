import { HeaderPanel, TranslateStyle } from './styles.ts';
import { useTranslation } from 'react-i18next';
import { AvailableLanguages } from '../../../language/languageUtil.ts';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
import IconAwesome from '../../atom/IconAwesome';

export default function Header() {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    const language = i18n.language === AvailableLanguages.PT ? 'pt-BR' : 'en';
    document.documentElement.lang = language;
    document.title = t('metadata.title');

    const description = t('metadata.description');
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute('content', description);
    document
      .querySelector('meta[property="og:title"]')
      ?.setAttribute('content', t('metadata.title'));
    document
      .querySelector('meta[property="og:description"]')
      ?.setAttribute('content', description);
    document
      .querySelector('meta[name="twitter:title"]')
      ?.setAttribute('content', t('metadata.title'));
    document
      .querySelector('meta[name="twitter:description"]')
      ?.setAttribute('content', description);
  }, [i18n.language, t]);

  const changeLanguage = () => {
    const lng =
      i18n.language === AvailableLanguages.PT
        ? AvailableLanguages.EN
        : AvailableLanguages.PT;
    localStorage.setItem('language', lng);
    i18n.changeLanguage(lng).then(() => ({}));
  };

  return (
    <HeaderPanel>
      <TranslateStyle
        type="button"
        onClick={changeLanguage}
        aria-label={t('accessibility.change_language')}
      >
        <IconAwesome size="2x" icon={faLanguage} />
      </TranslateStyle>
    </HeaderPanel>
  );
}
