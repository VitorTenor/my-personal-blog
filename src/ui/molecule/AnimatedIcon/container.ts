import { useSpring } from "react-spring";

export default function useContainer() {
  const shakeAnimation = useSpring({
    from: { transform: 'translate(-10px, 0px)' },
    to: { transform: 'translate(10px, 0px)' },
    config: { duration: 800 },
    loop: { reverse: true },
  });

  return shakeAnimation;
}