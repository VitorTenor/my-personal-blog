import styled from "styled-components";
import Label from "../../atom/Label";
import Translate from "../../atom/Translate";

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

export const LabelStyled = styled(Label)`
  font-size: 35px;
  font-weight: 600;
  position: absolute;
  color: #18d26e;
  justify-self: center;
`;

export const TranslateStyle = styled(Translate)`
  justify-self: right;
  color: #ffff;
`;
