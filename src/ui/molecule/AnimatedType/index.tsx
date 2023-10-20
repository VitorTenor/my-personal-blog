import React, { useState, useEffect } from "react";
import { LabelType } from "./styles.tsx";

interface AnimatedTypeProps {
    message: string;
}

const AnimatedType: React.FC<AnimatedTypeProps> = (props) => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let currentIndex = 0;
        let timer: NodeJS.Timeout;
        const typeText = () => {
            if (currentIndex <= props.message?.length) {
                if (currentIndex != -1){
                    setText(props.message?.slice(0, currentIndex));
                    currentIndex++;
                    timer = setTimeout(typeText, 300); // Ajuste a velocidade da digitação aqui (por exemplo, 300ms)
                } else {
                    currentIndex++;
                    typeText();
                }
            } else {
                setIsTyping(false);
                clearTimeout(timer);
                timer = setTimeout(eraseText, 1000); // Espera antes de começar a apagar
            }
        };

        const eraseText = () => {

            if (currentIndex >= 0) {
                setText(props.message?.slice(0, currentIndex));
                currentIndex--;
                timer = setTimeout(eraseText, 300); // Ajuste a velocidade da exclusão aqui (por exemplo, 300ms)
            } else {
                setIsTyping(true);
                clearTimeout(timer);
                timer = setTimeout(typeText, 1000); // Espera antes de começar a digitar novamente
            }
        };

        if (props.message && isTyping) {
            typeText();
        } else {
            setText(text);
            eraseText();
        }

        return () => {
            clearTimeout(timer);
        };
    }, [props.message]);

    return (
        <>
            <LabelType message={text} />
            {text == "" ? "." : <LabelType message={"|"} />}
        </>
    );
};

export default AnimatedType;
