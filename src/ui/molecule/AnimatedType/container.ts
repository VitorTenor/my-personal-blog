import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export interface AnimatedTypeProps {
  messages: any[];
}

export default function useContainer (props : AnimatedTypeProps) : string {
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  let message: string = '';
  const { t } = useTranslation();
  let arrayIndex: number = 0;

  useEffect(() => {
    let currentIndex = 0;
    let timer: NodeJS.Timeout;

    const typeText = (): void => {
      message = t(props.messages[arrayIndex]);

      if (currentIndex <= message.length) {
        if (currentIndex != -1) {
          setText(message.slice(0, currentIndex));
          currentIndex++;
          timer = setTimeout(typeText, 150); // Ajuste a velocidade da digitação aqui (por exemplo, 300ms)
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

    const eraseText = (): void => {
      message = t(props.messages[arrayIndex]);
      if (currentIndex >= 0) {
        setText(message.slice(0, currentIndex));
        currentIndex--;
        timer = setTimeout(eraseText, 200); // Ajuste a velocidade da exclusão aqui (por exemplo, 300ms)
      } else {
        validateArrayIndex();
        setIsTyping(true);
        clearTimeout(timer);
        timer = setTimeout(typeText, 500); // Espera antes de começar a digitar novamente
      }
    };

    const validateArrayIndex = (): void => {
      if (arrayIndex == props.messages.length - 1) {
        arrayIndex = 0;
      } else {
        arrayIndex = arrayIndex + 1;
      }
    };

    if (message && isTyping) {
      typeText();
    } else {
      setText('');
      eraseText();
    }

    return (): void => {
      message = t(props.messages[arrayIndex]);
      clearTimeout(timer);
    };
  }, [message]);

  return text;
}
