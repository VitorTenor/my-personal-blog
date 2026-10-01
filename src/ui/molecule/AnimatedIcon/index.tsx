import { ReactElement } from 'react';
import { animated } from 'react-spring';
import useContainer from './container';

interface AnimatedIconProps {
  icon: ReactElement;
  onClick?: () => void;
  ariaLabel: string;
}

export default function AnimatedIcon(props: AnimatedIconProps): ReactElement {
  const shakeAnimation = useContainer();
  return (
    <animated.button
      type="button"
      aria-label={props.ariaLabel}
      style={{
        ...shakeAnimation,
        background: 'transparent',
        border: 0,
        cursor: 'pointer',
        padding: 0,
      }}
      onClick={props.onClick}
    >
      {props.icon}
    </animated.button>
  );
}
