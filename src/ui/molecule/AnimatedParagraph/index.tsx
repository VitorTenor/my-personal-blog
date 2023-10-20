import {ReactElement} from "react";
import {animated, useSpring} from "react-spring";
import Paragraph from "../../atom/Paragraph";


interface AnimatedParagraphProps {
    message?: string;
    element?: ReactElement;
}


function AnimatedParagraph(props : AnimatedParagraphProps) : ReactElement {
    const shakeAnimation = useSpring({
        from: { transform: "translate(50px, 50px)" },
        to: { transform: "translate(5px, 5px)" },
        config: { duration: 400 },
        loop:{ reverse: false },
    });

    return (
        <animated.p style={shakeAnimation}>
            {props.element ? props.element : <Paragraph message={props.message ? props.message : ""} /> }
        </animated.p>
    );
}

export default AnimatedParagraph;
