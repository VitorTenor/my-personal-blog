import { createGlobalStyle } from 'styled-components';

export enum globalColor {
  primary = '#18d26e',
  secondary = '#ffffff',
  tertiary = 'hsla(0, 0%, 0%, 0.9)',
  quaternary = '#189fff',
  quinary = 'hsla(0, 0%, 65%, 0.2)',
}

export const GlobalStyles = createGlobalStyle`

  :root {
    @keyframes blink {
      0% { opacity: 0; }
      50% { opacity: 1; }
      100% { opacity: 0; }
    }
    
    font-family: 'Fira Code', monospace;

    background-color: ${globalColor.tertiary};

    /* Personalização do scroll */
    scrollbar-width: thin;
    scrollbar-color: ${globalColor.primary} ${globalColor.tertiary};
    
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

    overflow-x: hidden;
  }
`;
