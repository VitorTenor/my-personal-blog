import styled from 'styled-components';
import { globalColor } from '../../../../styles/GlobalStyles';

export const AboutStyles = styled.section`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1500px) {
    flex-direction: column;
    width: 88%;
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  margin-right: 100px;
  margin-top: 20px;

  @media (max-width: 1500px) {
    margin-right: 0px;
    zoom: 1.2;
  }

  @media (max-width: 550px) {
    margin-top: -30px;
    zoom: 0.8;
  }
  @media (max-width: 450px) {
    zoom: 0.6;
  }
`;

export const TextAbout = styled.div`
  font-size: 25px;
  color: ${globalColor.secondary};

  p {
    text-align: justify;
  }
  @media (max-width: 1700px) {
    font-size: 22px;
  }

  @media (max-width: 550px) {
    margin-top: -30px;
    font-size: 15px;
  }
  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

export const TitleAbout = styled.h1`
  font-size: 60px;
  color: ${globalColor.primary};

  @media (max-width: 1700px) {
    font-size: 50px;
  }
  @media (max-width: 550px) {
    font-size: 35px;
  }
  @media (max-width: 450px) {
    font-size: 28px;
  }
`;
