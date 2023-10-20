import {GlobalStyles} from "../../styles/GlobalStyles.ts";
import Header from "../../ui/organism/Header";
import {ReactElement, ReactNode} from "react";
import Footer from "../../ui/organism/Footer";

export default function Layout({ children }: { children: ReactNode }) : ReactElement {
    return (
        <>
            <GlobalStyles/>
            <Header />
            {children}
            <Footer />
        </>
    )
}