import { ReactElement } from 'react';
import { SectionProps } from '../../../../util/interface';
import { AboutStyles, ProfileImage, TextAbout, TitleAbout } from './styles';
import { useTranslation } from 'react-i18next';

// @ts-ignore
import ME from '../../../../assets/me.png';

export default function About(props: SectionProps): ReactElement {
  const { t } = useTranslation();
  const paragraphs = t('about', { returnObjects: true }) as string[];

  return (
    <AboutStyles id={props.id}>
      <ProfileImage
        src={ME}
        alt={t('accessibility.photo')}
        width="400"
        height="400"
      />
      <TextAbout>
        <TitleAbout>{t('welcome')}</TitleAbout>
        {paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </TextAbout>
    </AboutStyles>
  );
}
