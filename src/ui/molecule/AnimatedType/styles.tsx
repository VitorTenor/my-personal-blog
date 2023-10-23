import styled from 'styled-components';
import Label from '../../atom/Label';
import { globalColor } from '../../../styles/GlobalStyles.ts';

export const LabelType = styled(Label)`
  font-size: 30px;
  font-weight: 600;
  color: ${globalColor.secondary};
  justify-self: center;

  @media (max-width: 550px) {
    font-size: 25px;
  }
`;
