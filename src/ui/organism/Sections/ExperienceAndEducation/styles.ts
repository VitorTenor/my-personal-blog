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

  //@media (max-width: 510px) {
  //  margin-top: -200px;
  //}
  //@media (max-width: 510px) {
  //  margin-top: -200px;
  //}
  //@media (max-width: 400px) {
  //  margin-top: -150px;
  //}
  //@media (max-width: 280px) {
  //  margin-top: -100px;
  //}
`;

export const ProfessionalExperienceStyles = styled.div`
  width: 48.5%;
  border-radius: 30px;
  box-shadow: 0 4px 8px hsla(0, 10%, 85%, 0.1);

  @media (max-width: 1040px) {
    margin-bottom: 40px;
    width: 98%;
  }
`;

export const EducationStyles = styled.div`
  box-shadow: 0 4px 8px hsla(0, 10%, 85%, 0.1);
  width: 48.5%;
  border-radius: 30px;

  height: 100%;

  @media (max-width: 1040px) {
    width: 98%;
  }
`;

export const TitleStyles = styled.h1`
  font-size: 30px;
  text-align: left;
  margin-left: 20px;
  color: ${globalColor.secondary};

  @media (max-width: 510px) {
    font-size: 30px;
  }
  @media (max-width: 400px) {
    font-size: 25px;
  }
`;
