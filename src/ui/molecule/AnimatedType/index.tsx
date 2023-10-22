import React, { useState, useEffect } from "react";
import { LabelType } from "./styles.tsx";
import {useTranslation} from "react-i18next";

interface AnimatedTypeProps {
    messages: string[];
}

const AnimatedType: React.FC<AnimatedTypeProps> = (props) => {
    const [text, setText] = useState("");
    const [isTyping, setIsTyping] = useState(true);
    let message : string = "";
    const { t } = useTranslation();
    let arrayIndex : number = 0;

    useEffect(() => {
        let currentIndex = 0;
        let timer: NodeJS.Timeout;

        const typeText = () => {
            message = t(props.messages[arrayIndex]);

            if (currentIndex <= message.length) {
                if (currentIndex != -1){
                    setText(message.slice(0, currentIndex));
                    currentIndex++;
                    timer = setTimeout(typeText, 100); // Ajuste a velocidade da digitação aqui (por exemplo, 300ms)
                } else {
                    currentIndex++;
                    typeText();
                }
            } else {
                setIsTyping(false);
                clearTimeout(timer);
                timer = setTimeout(eraseText, 2000); // Espera antes de começar a apagar
            }
        };

        const eraseText = () => {
            message = t(props.messages[arrayIndex]);
            if (currentIndex >= 0) {
                setText(message.slice(0, currentIndex));
                currentIndex--;
                timer = setTimeout(eraseText, 200); // Ajuste a velocidade da exclusão aqui (por exemplo, 300ms)
            } else {
                if (arrayIndex == props.messages.length - 1) {
                    arrayIndex = 0;
                } else {
                    arrayIndex = arrayIndex + 1;
                }
                setIsTyping(true);
                clearTimeout(timer);
                timer = setTimeout(typeText, 500); // Espera antes de começar a digitar novamente
            }
        };

        if (message && isTyping) {
            typeText();
        } else {
            setText("");
            eraseText();
        }

        return () => {
            message = t(props.messages[arrayIndex]);
            clearTimeout(timer);
        };
    }, [message]);
    return (
        <>
            <LabelType message={text} />
            {text == "" ? "." : <LabelType message={"|"} />}
        </>
    );
};

export default AnimatedType;
