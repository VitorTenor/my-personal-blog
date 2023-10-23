import { createGlobalStyle } from 'styled-components';
// @ts-ignore
import BG_IMAGE from '../assets/backgroundImage.jpg';

export enum globalColor {
  primary = '#18d26e',
  secondary = '#ffffff',
}

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

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
      background-color: transparent; /* Defina a cor da pista como transparente */
    }
  }
`;
