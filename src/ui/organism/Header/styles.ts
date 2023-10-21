import styled from "styled-components";
import IconAwesome from "../../atom/IconAwesome";
import {globalColor} from "../../../styles/GlobalStyles.ts";

export const HeaderPanel = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  height: 50px;
  padding: 5px 15px 5px 15px;
`;

export const TranslateStyle = styled(IconAwesome)`
  justify-self: right;
  color: ${globalColor.secondary};

  &:hover {
    color: ${globalColor.primary};
    cursor: pointer;
  }
`;
