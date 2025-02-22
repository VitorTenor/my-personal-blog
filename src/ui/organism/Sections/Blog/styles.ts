import styled from 'styled-components';
import { globalColor } from '../../../../styles/GlobalStyles';

export const BlogStyles = styled.section`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

`;

export const TitleStyles = styled.h1`
  font-size: 35px;
  text-align: center;
  color: ${globalColor.secondary};

  @media (max-width: 510px) {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;

export const BodyStyles = styled.div`
  box-shadow: 0 4px 8px ${globalColor.quinary};
  border-radius: 30px;
  background-color: ${globalColor.tertiary};
  height: 100%;
  height: 100%;
  width: 90%;

  @media (max-width: 1040px) {
    width: 98%;
  }
  @media (max-width: 980px) {
    width: 90%;
  }
`;
