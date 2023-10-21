import {ReactElement} from "react";

import {SectionProps} from "../../../util/interface.ts";
import {PerfilImage, SectionStyles, TextStyles} from "./styles.ts";
import AnimatedParagraph from "../../molecule/AnimatedParagraph";

// @ts-ignore
import ME from "../../../assets/me.jpeg";


export default function Section2(props: SectionProps): ReactElement {
    return (
        <SectionStyles id={props.id}>
            <AnimatedParagraph
                element={
                    <div>
                        <PerfilImage src={ME} alt={"vitor-tenorio"}/>
                        <TextStyles>
                            <span>Eaaai! Eu sou o Vitor </span>
                            <a>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </a>
                        </TextStyles>
                    </div>

                }
            />
        </SectionStyles>
    )
}