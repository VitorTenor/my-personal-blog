import { createGlobalStyle } from 'styled-components';
// @ts-ignore
import BG_IMAGE from '../assets/backgroundImage.jpg';

export enum globalColor {
  primary = '#18d26e',
  secondary = '#ffffff',
  tertiary = 'hsla(0, 0%, 0%, 0.9)',
  // 'hsla(0, 0%, 65%, 0.2);',
  quaternary = '#189fff',
}

export const GlobalStyles = createGlobalStyle`
  :root {
    @keyframes blink {
      0% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }

    
    font-family: 'Fira Code', monospace;

    background-image: url(${BG_IMAGE});

    
    /* Personalização do scroll */
    scrollbar-width: thin;
    scrollbar-color: ${globalColor.primary} ${globalColor.secondary};
    
    /* Estilo da barra de rolagem */
    &::-webkit-scrollbar {
      width: 10px;
    }
    
    /* Estilo do polegar da barra de rolagem (thumb) */
    &::-webkit-scrollbar-thumb {
      background-color: ${globalColor.primary};
    }
    
    /* Estilo da pista da barra de rolagem (track) */
    &::-webkit-scrollbar-track {
      background-color: black; /* Defina a cor da pista como transparente */
    }
  }
`;
