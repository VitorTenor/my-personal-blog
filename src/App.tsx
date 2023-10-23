import Layout from './pages/layout';

import './language/languageConfig.ts';
import Routes from './Routes.tsx';

export default function App() {
  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
}
