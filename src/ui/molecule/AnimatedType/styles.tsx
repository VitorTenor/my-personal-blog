import styled from 'styled-components';
import Label from '../../atom/Label';
import { globalColor } from '../../../styles/GlobalStyles.ts';
import ColoredText from '../../atom/ColoredText/index.tsx';

export const LabelType = styled(Label)`
  font-size: 35px;
  font-weight: 500;
  color: ${globalColor.secondary};
  justify-self: center;

  @media (max-width: 750px) {
    font-size: 30px;
  }
  @media (max-width: 550px) {
    font-size: 25px;
  }
  @media (max-width: 450px) {
    font-size: 20px;
  }
`;

export const ColoredTextType = styled(ColoredText)`
  color: ${globalColor.secondary};
  font-size: 27.5px;
  font-weight: 300;

  @media (max-width: 550px) {
    font-size: 22px;
  }
`;

export const ColoredTextTypeBar = styled(ColoredText)`
  color: ${globalColor.secondary};
  font-size: 27.5px;
  font-weight: 300;
  animation: blink 1.5s step-start infinite;

  @media (max-width: 550px) {
    font-size: 20px;
  }
`;

export const AnimatedTypeStyles = styled.div``;
