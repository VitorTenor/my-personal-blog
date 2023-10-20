import {LabelName} from "./styles.ts";
import AnimatedParagraph from "../../ui/molecule/AnimatedParagraph";
import AnimatedType from "../../ui/molecule/AnimatedType";
import SocialIcons from "../../ui/molecule/SocialIcons";
import {ReactElement} from "react";

export default function MainPage() : ReactElement {
    return (
        <>
            <AnimatedParagraph
                element={
                <>
                    <LabelName message={"< vitor tenorio />"}/>
                    <br />
                    <AnimatedType message={('profession')} />
                    <br />
                    <SocialIcons />
                </>
                }
            />
        </>
    );
}