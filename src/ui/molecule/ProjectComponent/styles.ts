import styled from 'styled-components';
import { globalColor } from '../../../styles/GlobalStyles';
import ColoredText from '../../atom/ColoredText';

export const ProjectComponentStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 10px 10px;
  height: 100%;
  width: 99%;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 980px) {
    padding: 10px 0px 10px 0px;
    flex-direction: column;
    align-items: center;
  }
`;

export const ProjectStyles = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  color: ${globalColor.secondary};
  width: calc(50% - 20px);
  margin: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${globalColor.quinary};

  @media (max-width: 980px) {
    width: 90%;
  }
`;

export const ColoredTitleStyles = styled(ColoredText)`
  font-size: 22px;
  font-weight: 600;
  color: ${globalColor.primary};
  margin: 10px;

  @media (max-width: 510px) {
    font-size: 20px;
  }
  @media (max-width: 410px) {
    font-size: 18px;
  }
`;

export const DescriptionStyles = styled.div`
  font-size: 18px;
  margin: 15px 20px 15px 30px;
  word-wrap: break-word;
  text-align: start;
  @media (max-width: 510px) {
    font-size: 16px;
  }
  @media (max-width: 410px) {
    font-size: 14px;
    margin: 10px 15px 10px 15px;
  }
  @media (max-width: 350px) {
    margin: 5px 10px 5px 10px;
  }
`;

export const TagsStyles = styled.div`
  font-size: 16px;
  font-weight: 600;
  margin: 10px;
  color: ${globalColor.secondary};
  background-color: ${globalColor.quinary};
  border-radius: 20px;
  padding: 3px 10px 3px 10px;
  border: none;

  span {
    color: ${globalColor.primary};
  }

  @media (max-width: 510px) {
    font-size: 14px;
  }
  @media (max-width: 410px) {
    font-size: 12px;
  }
`;

export const TagComponent = styled.div`
  flex-direction: row;
  display: flex;
  margin-left: 20px;
  align-items: flex-end;
  height: 100%;

  @media (max-width: 510px) {
    margin-left: 5px;
  }
  @media (max-width: 350px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

export const TitleComponentStyles = styled.div`
  flex-direction: row;
  display: flex;
  width: 100%;
  justify-content: space-between;
  .icon-link {
    color: ${globalColor.primary};
    margin-right: 15px;
    margin-top: 15px;
  }
`;
