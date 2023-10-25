import styled from 'styled-components';
import ColoredText from '../../atom/ColoredText';
import { globalColor } from '../../../styles/GlobalStyles';

export const ExperienceComponentStyles = styled.div`
  padding: 0 15px 0 15px;
`;

export const ColoredPath = styled(ColoredText)`
  font-size: 20px;
  font-weight: 400;
  color: ${globalColor.primary};
  margin-bottom: 15px;
`;

export const ColoredTitle = styled(ColoredText)`
  font-size: 20px;
  font-weight: 500;
  color: ${globalColor.quaternary};
  margin-bottom: 10px;
  margin-left: 20%;
  margin-top: 10px;
  display: flex;
  word-break: break-all;
`;

export const ColoredDate = styled(ColoredText)`
  font-size: 15px;
  font-weight: 500;
  color: ${globalColor.secondary};
  margin-bottom: 10px;
  margin-left: 25%;
  margin-top: 10px;
  display: flex;
`;

export const ColoredCompany = styled(ColoredText)`
  font-size: 15px;
  font-weight: 500;
  color: ${globalColor.secondary};
  margin-bottom: 10px;
  margin-left: 25%;
  margin-top: 10px;
  display: flex;
`;

export const ColoredDescription = styled(ColoredText)`
  font-size: 15px;
  font-weight: 500;
  color: ${globalColor.secondary};
  margin-bottom: 10px;
  margin-left: 25%;
  margin-top: 10px;
  display: flex;
`;

export const ColoredSpan = styled(ColoredText)`
  color: ${globalColor.quaternary};
`;
