import styled from 'styled-components';
import { globalColor } from '../../../styles/GlobalStyles.ts';

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

export const TranslateStyle = styled.button`
  justify-self: right;
  color: ${globalColor.secondary};
  background: transparent;
  border: 0;
  padding: 0;

  &:hover {
    color: ${globalColor.primary};
    cursor: pointer;
  }
  @media (max-width: 510px) {
    svg {
      font-size: 1.8rem;
    }
  }

  @media (max-width: 400px) {
    svg {
      font-size: 1.5rem;
    }
  }
`;
