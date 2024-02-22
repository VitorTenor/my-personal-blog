import { ReactElement } from 'react';
import { animated } from 'react-spring';
import useContainer from './container';

interface AnimatedIconProps {
  icon: ReactElement;
  onClick?: () => void;
}

export default function AnimatedIcon(props: AnimatedIconProps): ReactElement {
  const shakeAnimation = useContainer();
  return (
    <animated.div style={shakeAnimation} onClick={props.onClick}>
      {props.icon}
    </animated.div>
  );
}
