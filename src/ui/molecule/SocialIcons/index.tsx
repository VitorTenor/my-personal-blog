import {
  faGithub,
  faInstagram,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { SocialIconsStyled } from './styles.ts';
import IconAwesome from '../../atom/IconAwesome';
import { Link } from 'react-router-dom';
import { ReactElement } from 'react';

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
      url: 'https://github.com/VitorTenor',
    },
    {
      icon: faLinkedin,
      key: 'linkedin',
      url: 'https://www.linkedin.com/in/vitortelima/',
    },
    {
      icon: faInstagram,
      key: 'instagram',
      url: 'https://instagram.com/vitortenorio_',
    },
    {
      icon: faWhatsapp,
      key: 'whatsapp',
      url: 'https://api.whatsapp.com/send/?phone=%2B5511944730316&text&app_absent=0',
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
