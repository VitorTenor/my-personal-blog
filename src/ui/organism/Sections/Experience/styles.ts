import styled from 'styled-components';
import { globalColor } from '../../../../styles/GlobalStyles';

export const ExperienceStyles = styled.section`
  width: 90%;
  height: 150vh;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1040px) {
    flex-direction: column;
    height: 100%;
  }
`;

export const ProfessionalExperienceStyles = styled.div`
  width: 49.5%;
  background-color: ${globalColor.tertiary};
  border-radius: 30px;

  @media (max-width: 1040px) {
    margin-bottom: 40px;
    width: 100%;
  }
`;

export const EducationStyles = styled.div`
  width: 49.5%;
  border-radius: 30px;
  background-color: ${globalColor.tertiary};
  @media (max-width: 1040px) {
    width: 100%;
  }
`;

export const TitleStyles = styled.h1`
  font-size: 35px;
  text-align: center;
  font-height: 100;
  color: ${globalColor.secondary};
`;
