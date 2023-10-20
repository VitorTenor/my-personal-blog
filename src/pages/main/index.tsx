import {ChevronDownIcon, LabelName, MainPageStyled} from "./styles.ts";
import AnimatedParagraph from "../../ui/molecule/AnimatedParagraph";
import AnimatedType from "../../ui/molecule/AnimatedType";
import SocialIcons from "../../ui/molecule/SocialIcons";
import {ReactElement} from "react";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import AnimatedIcon from "../../ui/molecule/AnimatedIcon";

export default function MainPage(): ReactElement {
    return (
        <MainPageStyled>
            <section key={"main"}>
                <AnimatedParagraph
                    element={
                        <>
                            <LabelName message={"< vitor tenorio />"}/>
                            <br/>
                            <AnimatedType message={('profession')}/>
                            <br/>
                            <SocialIcons/>

                            <AnimatedIcon
                                icon={
                                    <ChevronDownIcon icon={faChevronDown} size={"3x"}/>
                                }
                            />
                        </>
                    }
                />
            </section>
            <section key={"main"}>
                <AnimatedParagraph
                    element={
                        <>
                            <LabelName message={"< vitor tenorio />"}/>
                            <br/>
                            <AnimatedType message={('profession')}/>
                            <br/>
                            <SocialIcons/>

                            <AnimatedIcon
                                icon={
                                    <ChevronDownIcon icon={faChevronDown} size={"3x"}/>
                                }
                            />
                        </>
                    }
                />
            </section>
            <section key={"main"}>
                <AnimatedParagraph
                    element={
                        <>
                            <LabelName message={"< vitor tenorio />"}/>
                            <br/>
                            <AnimatedType message={('profession')}/>
                            <br/>
                            <SocialIcons/>

                            <AnimatedIcon
                                icon={
                                    <ChevronDownIcon icon={faChevronDown} size={"3x"}/>
                                }
                            />
                        </>
                    }
                />
            </section>
        </MainPageStyled>

    );
}