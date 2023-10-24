import styled from 'styled-components';
import { globalColor } from '../../../../styles/GlobalStyles';

export const ExperienceStyles = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

export const ProfessionalExperienceStyles = styled.div`
  width: 49%;
  background-color: ${globalColor.tertiary};
  border-radius: 30px;
`;

export const EducationStyles = styled.div`
  width: 49%;
  border-radius: 30px;
  background-color: ${globalColor.tertiary};
`;

export const TitleStyles = styled.h1`
  font-size: 35px;
  text-align: center;
  font-height: 100;
  color: ${globalColor.secondary};
`;
