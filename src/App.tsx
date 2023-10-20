import {GlobalStyles} from "./styles/GlobalStyles.ts";
import Routes from "./Routes.tsx";
import Header from "./ui/organism/Header";

function App() {

    return (
        <>
            <GlobalStyles/>
            <Header />
            <Routes />
        </>
    )
}

export default App
