import styled from 'styled-components';
import ColoredText from '../../atom/ColoredText';
import { globalColor } from '../../../styles/GlobalStyles';

export const ExperienceComponentStyles = styled.div`
  padding: 0 15px 0 15px;
`;

export const ColoredCompany = styled(ColoredText)`
  color: ${globalColor.primary};
  margin-top: 30px;
  margin-left: 5%;
  font-size: 20px;
  font-weight: 600;
  display: flex;
  word-break: break-word;

  @media (max-width: 510px) {
    font-size: 19px;
  }
  @media (max-width: 400px) {
    font-size: 17px;
  }
`;

export const ColoredWorkTitle = styled(ColoredText)`
  font-size: 20px;
  color: ${globalColor.secondary};
  font-weight: 600;
  margin-bottom: 10px;
  display: flex;
  word-break: break-word;

  @media (max-width: 510px) {
    font-size: 18px;
    margin-left: -4%;
  }
  @media (max-width: 400px) {
    font-size: 16px;
    margin-left: -4%;
  }
`;

export const ColoredDate = styled(ColoredText)`
  margin-bottom: 35px;
  display: flex;
`;

export const ColoredDescription = styled(ColoredText)`
  margin-bottom: 10px;
  display: flex;
  word-break: break-word;
`;

export const ExperienceStyles = styled.div`
  color: ${globalColor.secondary};
  margin-left: 10%;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5%;

  @media (max-width: 1040px) {
    margin-left: 18%;
  }
  @media (max-width: 690px) {
    margin-left: 14%;
  }
  @media (max-width: 510px) {
    margin-left: 10%;
    font-size: 15px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`;
