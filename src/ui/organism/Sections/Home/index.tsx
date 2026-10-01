import { ReactElement } from 'react';
import AnimatedType from '../../../molecule/AnimatedType';
import SocialIcons from '../../../molecule/SocialIcons';
import AnimatedIcon from '../../../molecule/AnimatedIcon';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { scrollTo } from '../../../../util/Scroll/scroll.ts';
import { ChevronDownIcon, HomeStyles, LabelName } from './styles.ts';
import { SectionProps } from '../../../../util/interface.ts';
import { useTranslation } from 'react-i18next';

export default function Home(props: SectionProps): ReactElement {
  const { t } = useTranslation();

  return (
    <HomeStyles id={props.id}>
      <LabelName>{'< vitor tenório />'}</LabelName>
      <br />
      <AnimatedType messages={['hero.role']} />
      <br />
      <SocialIcons />
      <AnimatedIcon
        onClick={() => scrollTo('#about')}
        ariaLabel={t('accessibility.scroll_about')}
        icon={<ChevronDownIcon icon={faChevronDown} size={'3x'} />}
      />
    </HomeStyles>
  );
}
