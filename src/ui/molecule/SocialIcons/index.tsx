import {
  faGithub,
  faInstagram,
  faLinkedin,
  faMailchimp,
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';
import { SocialIconsStyled } from './styles.ts';
import IconAwesome from '../../atom/IconAwesome';
import { Link } from 'react-router-dom';
import { ReactElement } from 'react';
import {
  GITHUB_LINK,
  LINKEDIN_LINK,
  INSTAGRAM_LINK,
  EMAIL_LINK
} from '../../../util/constants.ts';
import { faMailBulk, faMailReply, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import { faMailForward } from '@fortawesome/free-solid-svg-icons/faMailForward';

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
      icon: faInstagram,
      key: 'instagram',
      url: `${INSTAGRAM_LINK}`,
    },
    {
      icon: faMailReply,
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
