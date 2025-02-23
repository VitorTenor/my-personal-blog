import { ReactElement } from 'react';
import { SectionProps } from '../../../../util/interface';
import { AboutStyles, ProfileImage, TextAbout, TitleAbout } from './styles';
import { useTranslation } from 'react-i18next';

// @ts-ignore
import ME from '../../../../assets/me.png';

export default function About(props: SectionProps): ReactElement {
  const { t } = useTranslation();

  return (
      <AboutStyles id={props.id}>
        <ProfileImage src={ME} />
        <TextAbout>
          <TitleAbout>{t('welcome')}</TitleAbout>
          <p>{t('resume')}</p>
          <p>{t('resume-2')}</p>
        </TextAbout>
      </AboutStyles>
  );
}
