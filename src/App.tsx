import Layout from './pages/layout';

import './language/languageConfig.ts';
import Routes from './Routes.tsx';
import { AuthContextProvider } from './context';

export default function App() : JSX.Element {
  console.log("App");
  return (
    <AuthContextProvider>
      <Layout />
      <Routes />
    </AuthContextProvider>
  );
}

