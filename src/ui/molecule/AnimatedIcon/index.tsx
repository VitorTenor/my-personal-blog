import { ReactElement } from 'react';
import { animated, useSpring } from 'react-spring';

interface AnimatedIconProps {
  icon: ReactElement;
  onClick?: () => void;
}

export default function AnimatedIcon(props: AnimatedIconProps): ReactElement {
  const shakeAnimation = useSpring({
    from: { transform: 'translate(-10px, 0px)' },
    to: { transform: 'translate(10px, 0px)' },
    config: { duration: 800 },
    loop: { reverse: true },
  });

  return (
    <animated.div style={shakeAnimation} onClick={props.onClick}>
      {props.icon}
    </animated.div>
  );
}
