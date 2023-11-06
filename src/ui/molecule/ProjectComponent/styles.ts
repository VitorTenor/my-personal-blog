import styled from 'styled-components';
import { globalColor } from '../../../styles/GlobalStyles';
import ColoredText from '../../atom/ColoredText';

export const ProjectComponentStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 10px 10px 10px;
  :hover {
    cursor: pointer;
  }
`;

export const ProjectStyles = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  color: white;
  width: calc(50% - 20px);
  margin: 10px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: ${globalColor.quinary};
`;

export const ColoredTitleStyles = styled(ColoredText)`
  font-size: 22px;
  font-weight: 600;
  color: ${globalColor.primary};
  margin: 10px;
`;

export const DescriptionStyles = styled.div`
  font-size: 18px;
  margin: 15px 10px 15px 30px;
  word-wrap: break-word;
`;

export const TagsStyles = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin: 10px;
  color: ${globalColor.secondary};
  background-color: ${globalColor.quinary};
  border-radius: 20px;
  padding: 3px 10px 3px 10px;
  border: none;
  margin-left: 28px;

  span {
    color: ${globalColor.primary};
  }
`;

export const TagComponent = styled.div`
  flex-direction: row;
  display: flex;
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
