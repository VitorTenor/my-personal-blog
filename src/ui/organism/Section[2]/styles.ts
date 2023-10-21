import styled from "styled-components";
import { globalColor } from "../../../styles/GlobalStyles.ts";

export const PerfilImage = styled.img`
  border-radius: 15%;
  width: 400px;
  margin-top: 120px;
`;

export const SectionStyles = styled.section`
  div {
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  a {
    text-decoration: none;
    color: ${globalColor.secondary};
    font-size: 18px;
    margin-left: 20px; 
    margin-top: 50px;
  }
`;

export const TextStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  span {
    font-size: 50px;
    color: ${globalColor.primary};
    margin-left: 100px;
    margin-top: 20px;
  }
`;
