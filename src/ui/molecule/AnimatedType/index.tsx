import { ReactElement } from 'react';
import useContainer, { AnimatedTypeProps } from './container.tsx';
import {
  AnimatedTypeStyles,
  ColoredTextType,
  ColoredTextTypeBar,
  LabelType,
} from './styles.tsx';


export default function AnimatedType(props: AnimatedTypeProps): ReactElement {
  const text = useContainer(props);
  return (
    <AnimatedTypeStyles>
      <ColoredTextType message="~/" />
      <LabelType message={text} />
      <ColoredTextTypeBar message="|" />
    </AnimatedTypeStyles>
  );
}
