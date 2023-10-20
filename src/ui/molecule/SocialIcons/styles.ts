import styled from "styled-components";
import {globalColor} from "../../../styles/GlobalStyles.ts";

export const SocialIconsStyled = styled.div`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  
  padding: 15px 120px 15px 120px;
  
  .icon {
    color: ${globalColor.secondary};
  }
  .icon:hover {
    color: ${globalColor.primary};
  }
`;