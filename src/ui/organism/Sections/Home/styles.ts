import styled from 'styled-components';
import Label from '../../../atom/Label';
import { globalColor } from '../../../../styles/GlobalStyles.ts';
import IconAwesome from '../../../atom/IconAwesome';

export const HomeStyles = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const LabelName = styled(Label)`
  font-size: 60px;
  font-weight: 500;
  color: ${globalColor.primary};
  justify-self: center;

  @media (max-width: 550px) {
    font-size: 35px;
  }
`;

export const ChevronDownIcon = styled(IconAwesome)`
  margin-top: 100px;
  color: ${globalColor.primary};
`;
