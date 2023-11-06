import { ReactElement } from 'react';

import { MainPageStyles } from './styles.ts';
import Home from '../../ui/organism/Sections/Home';
import About from '../../ui/organism/Sections/About/index.tsx';
import Experience from '../../ui/organism/Sections/Experience/index.tsx';
import Project from '../../ui/organism/Sections/Project/index.tsx';

export default function MainPage(): ReactElement {
  return (
    <MainPageStyles>
      <Home id={'home'} />
      <About id={'about'} />
      <Experience id={'experience'} />
      <Project id={'project'} />
    </MainPageStyles>
  );
}
