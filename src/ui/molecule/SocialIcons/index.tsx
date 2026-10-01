import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
  RESUME_LINK,
} from '../../../util/constants.ts';
import IconAwesome from '../../atom/IconAwesome';
import { SocialIconsStyled } from './styles.ts';

interface IconProps {
  icon: any;
  key: string;
  url: string;
  external: boolean;
}

export default function SocialIcons(): ReactElement {
  const { t } = useTranslation();
  const icons: IconProps[] = [
    {
      icon: faGithub,
      key: 'github',
      url: `${GITHUB_LINK}`,
      external: true,
    },
    {
      icon: faLinkedin,
      key: 'linkedin',
      url: `${LINKEDIN_LINK}`,
      external: true,
    },
    {
      icon: faEnvelope,
      key: 'email',
      url: `${EMAIL_LINK}`,
      external: false,
    },
    {
      icon: faFilePdf,
      key: 'resume',
      url: RESUME_LINK,
      external: true,
    },
  ];

  return (
    <SocialIconsStyled>
      {icons.map((icon: IconProps) => {
        return (
          <a
            key={icon.key}
            href={icon.url}
            aria-label={t(`accessibility.${icon.key}`)}
            target={icon.external ? '_blank' : undefined}
            rel={icon.external ? 'noopener noreferrer' : undefined}
          >
            <IconAwesome icon={icon.icon} size="2xl" className={'icon'} />
          </a>
        );
      })}
    </SocialIconsStyled>
  );
}
