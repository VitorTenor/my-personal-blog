import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

export interface AnimatedTypeProps {
  messages: string[];
}

export default function useContainer(props: AnimatedTypeProps): string {
  const { i18n, t } = useTranslation();
  const [text, setText] = useState('');
  const [reduceMotion, setReduceMotion] = useState(false);
  const messageKeys = useMemo(() => props.messages.join('|'), [props.messages]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener('change', updatePreference);

    return () => mediaQuery.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    const messages = messageKeys.split('|').map((key) => t(key));

    if (reduceMotion) {
      setText(messages[0]);
      return undefined;
    }

    let messageIndex = 0;
    let characterIndex = 0;
    let isDeleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const animate = () => {
      const message = messages[messageIndex];

      if (!isDeleting) {
        characterIndex += 1;
        setText(message.slice(0, characterIndex));

        if (characterIndex === message.length) {
          isDeleting = true;
          timer = setTimeout(animate, 2000);
          return;
        }

        timer = setTimeout(animate, 100);
        return;
      }

      characterIndex -= 1;
      setText(message.slice(0, characterIndex));

      if (characterIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length;
        timer = setTimeout(animate, 500);
        return;
      }

      timer = setTimeout(animate, 200);
    };

    setText('');
    animate();

    return () => clearTimeout(timer);
  }, [i18n.language, messageKeys, reduceMotion, t]);

  return text;
}
