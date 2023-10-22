import {ReactElement} from "react";
import AnimatedParagraph from "../../molecule/AnimatedParagraph";
import AnimatedType from "../../molecule/AnimatedType";
import SocialIcons from "../../molecule/SocialIcons";
import AnimatedIcon from "../../molecule/AnimatedIcon";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {scrollTo} from "../../../util/Scroll/scroll.ts";
import {ChevronDownIcon, LabelName, SectionStyles} from "./styles.ts";
import {SectionProps} from "../../../util/interface.ts";


export default function Section1(props: SectionProps): ReactElement {
    const messages : string[] = ["profession", "study"];

    return (
        <SectionStyles id={props.id}>
            <AnimatedParagraph
                element={
                    <>
                        <LabelName message={"< vitor tenorio />"}/>
                        <br/>
                        <AnimatedType messages={messages}/>
                        <br/>
                        <SocialIcons/>
                        <AnimatedIcon
                            onClick={() => scrollTo("#section2")}
                            icon={<ChevronDownIcon icon={faChevronDown} size={"3x"}/>}
                        />
                    </>
                }
            />
        </SectionStyles>
    );
}