import  { ReactElement } from "react";
import { animated, useSpring, config } from "react-spring";
import Paragraph from "../../atom/Paragraph";

interface AnimatedParagraphProps {
    message?: string;
    element?: ReactElement;
}

function AnimatedParagraph(props: AnimatedParagraphProps): ReactElement {
    const shakeAnimation = useSpring({
        from: { transform: "translate(10px, 0px)" },
        to: { transform: "translate(0px, 0px)" },
        config: { ...config.default, duration: 400 },
        reset: true, // Define para reverter para o estado inicial
        reverse: false,
    });

    return (
        <animated.p style={shakeAnimation}>
            {props.element ? props.element : <Paragraph message={props.message ? props.message : ""} />}
        </animated.p>
    );
}

export default AnimatedParagraph;
