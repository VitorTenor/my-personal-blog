import  { ReactElement } from "react";
import { animated, useSpring, config } from "react-spring";
import Paragraph from "../../atom/Paragraph";

interface AnimatedParagraphProps {
    message?: string;
    element?: ReactElement;
}

function AnimatedParagraph(props: AnimatedParagraphProps): ReactElement {
    const shakeAnimation = useSpring({
        from: { transform: "translate(50px, 30px)" },
        to: { transform: "translate(0px, 0px)" },
        config: { ...config.default, duration: 400 },
        reset: true,
        reverse: false,
    });

    return (
        <animated.div style={shakeAnimation}>
            {props.element ? props.element : <Paragraph message={props.message ? props.message : ""} />}
        </animated.div>
    );
}

export default AnimatedParagraph;
