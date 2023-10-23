import { ReactElement } from 'react';

import { MainPageStyles } from './styles.ts';
import Home from '../../ui/organism/Sections/Home';

export default function MainPage(): ReactElement {
  return (
    <MainPageStyles>
      <Home id={'section1'} />
      <Home id={'section2'} />
    </MainPageStyles>
  );
}
