import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import {
  EMAIL_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from '../../../util/constants.ts';
import IconAwesome from '../../atom/IconAwesome';
import { SocialIconsStyled } from './styles.ts';

interface IconProps {
  icon: any;
  key: string;
  url: string;
}

export default function SocialIcons(): ReactElement {
  const icons: IconProps[] = [
    {
      icon: faGithub,
      key: 'github',
      url: `${GITHUB_LINK}`,
    },
    {
      icon: faLinkedin,
      key: 'linkedin',
      url: `${LINKEDIN_LINK}}`,
    },
    {
      icon: faEnvelope,
      key: 'email',
      url: `${EMAIL_LINK}`,
    },
  ];

  return (
    <SocialIconsStyled>
      {icons.map((icon: IconProps) => {
        return (
          <Link key={icon.key} to={icon.url} target={'_blank'}>
            <IconAwesome icon={icon.icon} size="2xl" className={'icon'} />
          </Link>
        );
      })}
    </SocialIconsStyled>
  );
}
