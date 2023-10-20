import Layout from "./pages/layout";

import "./language/languageConfig.ts"
import Routes from "./Routes.tsx";

function App() {
    return (
        <>
            <Layout>
                <Routes />
            </Layout>
        </>
    )
}

export default App
