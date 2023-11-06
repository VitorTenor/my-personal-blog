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
`;

export const BodyStyles = styled.div`
  box-shadow: 0 4px 8px ${globalColor.quinary};
  border-radius: 30px;
  background-color: ${globalColor.tertiary};
  height: 100%;
  width: 75%;
`;
