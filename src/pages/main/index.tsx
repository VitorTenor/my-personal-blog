import {MainPageStyled} from "./styles.ts";
import {ReactElement} from "react";
import Section1 from "../../ui/organism/Section[1]";
import Section2 from "../../ui/organism/Section[2]";

export default function MainPage(): ReactElement {
    return (
        <MainPageStyled>
            <Section1 id={"section1"}/>
            <Section2 id={"section2"}/>
        </MainPageStyled>

    );
}