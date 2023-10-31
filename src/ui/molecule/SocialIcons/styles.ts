import styled from 'styled-components';
import { globalColor } from '../../../styles/GlobalStyles.ts';

export const SocialIconsStyled = styled.div`
  display: flex;
  justify-self: center;
  justify-content: center;

  padding: 15px 120px 15px 120px;

  .icon {
    margin: 0 20px 0 20px;
    font-size: 2.5rem;
    color: ${globalColor.secondary};
  }
  .icon:hover {
    color: ${globalColor.primary};
  }

  @media (max-width: 550px) {
    padding: 15px 50px 15px 50px;
    .icon {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 480px) {
    .icon {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 410px) {
    padding: 15px 30px 15px 30px;
    .icon {
      font-size: 1.6rem;
    }
  }
`;
