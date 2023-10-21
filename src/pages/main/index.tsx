import {ReactElement} from "react";

import {MainPageStyles} from "./styles.ts";
import Section1 from "../../ui/organism/Section[1]";
import Section2 from "../../ui/organism/Section[2]";

export default function MainPage(): ReactElement {
    return (
        <MainPageStyles>
            <Section1 id={"section1"}/>
            <Section2 id={"section2"}/>
        </MainPageStyles>
    );
}