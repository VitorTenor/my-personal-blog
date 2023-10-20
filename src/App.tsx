import Routes from "./Routes.tsx";
import Layout from "./pages/layout";

import "./language/languageConfig.ts"

function App() {
    return (
        <>
            <Layout />
            <Routes />
        </>
    )
}

export default App
