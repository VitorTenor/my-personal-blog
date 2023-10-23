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
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-image: url(${BG_IMAGE});

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

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
