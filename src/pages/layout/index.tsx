import { GlobalStyles } from '../../styles/GlobalStyles.ts';
import Header from '../../ui/organism/Header';
import { ReactElement } from 'react';
import Footer from '../../ui/organism/Footer';

export default function Layout(): ReactElement {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Footer />
    </>
  );
}
