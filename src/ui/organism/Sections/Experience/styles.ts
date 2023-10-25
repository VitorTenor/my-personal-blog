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
  width: 48.5%;
  background-color: ${globalColor.tertiary};
  border-radius: 30px;
  box-shadow: 0 4px 8px hsla(0, 0%, 65%, 0.1);

  @media (max-width: 1040px) {
    margin-bottom: 40px;
    width: 98%;
  }
`;

export const EducationStyles = styled.div`
  box-shadow: 0 4px 8px hsla(0, 0%, 65%, 0.1);
  width: 48.5%;
  border-radius: 30px;
  background-color: ${globalColor.tertiary};

  height: 100%;

  @media (max-width: 1040px) {
    width: 98%;
  }
`;

export const TitleStyles = styled.h1`
  font-size: 35px;
  text-align: center;
  color: ${globalColor.secondary};

  @media (max-width: 400px) {
    font-size: 30px;
  }
`;
