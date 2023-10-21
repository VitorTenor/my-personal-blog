import {ReactElement} from "react";

import {MainPageStyles} from "./styles.ts";
import Section1 from "../../ui/organism/Section[1]";

export default function MainPage(): ReactElement {
    return (
        <MainPageStyles>
            <Section1 id={"section1"}/>
        </MainPageStyles>
    );
}