import { createGlobalStyle } from "styled-components";
// @ts-ignore
import BG_IMAGE from "../assets/backgroundImage.jpg";

export const GlobalStyles = createGlobalStyle`
  :root {
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    line-height: 1.5;
    font-weight: 400;

    color-scheme: light dark;
    color: rgba(255, 255, 255, 0.87);
    background-image: url(${BG_IMAGE}); /* Use a notação url() e a variável BG_IMAGE */
    background-size: cover;
    background-repeat: no-repeat;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }
`;


export enum globalColor   {
    primary = "#18d26e",
    secondary = "#ffffff",
}