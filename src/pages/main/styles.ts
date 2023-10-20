import styled from "styled-components";
import Label from "../../ui/atom/Label";
import {globalColor} from "../../styles/GlobalStyles.ts";

export const LabelName = styled(Label)`
  font-size: 60px;
  font-weight: 600;
  color:  ${globalColor.primary};
  justify-self: center;
  
  @media (max-width: 550px) {
    font-size: 40px;
  }
`;

