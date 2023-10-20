import {GlobalStyles} from "../../styles/GlobalStyles.ts";
import Header from "../../ui/organism/Header";
import {ReactElement} from "react";

export default function Layout() : ReactElement {
    return (
        <>
            <GlobalStyles/>
            <Header />
        </>
    )
}