import styled from 'styled-components';
import { globalColor } from '../../../../styles/GlobalStyles';

export const ProjectStyles = styled.section`
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
