import styled from 'styled-components';
import { globalColor } from '../../../../styles/GlobalStyles';

export const AboutStyles = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1600px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const ProfileImage = styled.img`
  margin-right: 100px;

  @media (max-width: 1600px) {
    margin-right: 0px;
    zoom: 1.2;
  }

  @media (max-width: 550px) {
    margin-top: -30px;
    zoom: 0.8;
  }
`;

export const TextAbout = styled.p`
  font-size: 30px;
  color: ${globalColor.secondary};

  @media (max-width: 550px) {
    margin-top: -30px;
    font-size: 20px;
  }
`;

export const TitleAbout = styled.h1`
  font-size: 60px;
  color: ${globalColor.primary};

  @media (max-width: 550px) {
    font-size: 35px;
  }
`;
