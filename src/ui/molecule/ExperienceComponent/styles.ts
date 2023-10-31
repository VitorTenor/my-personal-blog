import styled from 'styled-components';
import ColoredText from '../../atom/ColoredText';
import { globalColor } from '../../../styles/GlobalStyles';

export const ExperienceComponentStyles = styled.div`
  padding: 0 15px 0 15px;
`;

export const ColoredPath = styled(ColoredText)`
  color: ${globalColor.primary};
  margin-top: 30px;
  font-size: 20px;
  font-weight: 400;
  display: flex;
  word-break: break-word;

  @media (max-width: 400px) {
    font-size: 18px;
  }
`;

export const ColoredTitle = styled(ColoredText)`
  margin-left: -8%;
  font-size: 20px;
  color: ${globalColor.quaternary};
  margin-bottom: 20px;
  display: flex;
  word-break: break-word;

  @media (max-width: 400px) {
    font-size: 18px;
    margin-left: -4%;
  }
`;

export const ColoredDate = styled(ColoredText)`
  margin-bottom: 10px;
  display: flex;
`;

export const ColoredCompany = styled(ColoredText)`
  margin-bottom: 10px;
  display: flex;
  word-break: unset;
  word-break: break-word;
`;

export const ColoredDescription = styled(ColoredText)`
  margin-bottom: 10px;
  display: flex;
  word-break: break-word;
`;

export const ColoredSpan = styled(ColoredText)`
  color: ${globalColor.quaternary};
`;

export const ExperienceStyles = styled.div`
  color: ${globalColor.secondary};
  margin-left: 25%;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1040px) {
    margin-left: 18%;
  }
  @media (max-width: 690px) {
    margin-left: 14%;
  }
  @media (max-width: 510px) {
    margin-left: 10%;
  }
  @media (max-width: 400px) {
    font-size: 15px;
  }
`;
