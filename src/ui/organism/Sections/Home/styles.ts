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
  font-size: 65px;
  font-weight: 500;
  color: ${globalColor.primary};
  justify-self: center;

  @media (max-width: 750px) {
    font-size: 55px;
  }
  @media (max-width: 650px) {
    font-size: 45px;
  }
  @media (max-width: 550px) {
    font-size: 35px;
  }

  @media (max-width: 415px) {
    font-size: 28px;
  }
  @media (max-width: 340px) {
    font-size: 24px;
  }
`;

export const ChevronDownIcon = styled(IconAwesome)`
  margin-top: 100px;
  color: ${globalColor.primary};

  @media (max-width: 550px) {
    font-size: 1.8rem;
  }
`;
