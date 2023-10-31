import { ReactElement } from 'react';
import AnimatedType from '../../../molecule/AnimatedType';
import SocialIcons from '../../../molecule/SocialIcons';
import AnimatedIcon from '../../../molecule/AnimatedIcon';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { scrollTo } from '../../../../util/Scroll/scroll.ts';
import { ChevronDownIcon, LabelName, HomeStyles } from './styles.ts';
import { SectionProps } from '../../../../util/interface.ts';

export default function Home(props: SectionProps): ReactElement {
  const messages: string[] = ['profession', 'study'];

  return (
    <HomeStyles id={props.id}>
      <LabelName message={'< vitor tenório />'} />
      <br />
      <AnimatedType messages={messages} />
      <br />
      <SocialIcons />
      <AnimatedIcon
        onClick={() => scrollTo('#about')}
        icon={<ChevronDownIcon icon={faChevronDown} size={'3x'} />}
      />
    </HomeStyles>
  );
}
