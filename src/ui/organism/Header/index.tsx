import {LabelStyled, HeaderPanel, TranslateStyle} from "./styles.ts";

export default function Header() {
    return (
        <HeaderPanel>
            <LabelStyled message={"< vitor tenorio />"}/>
            <TranslateStyle size={"2x"} onClick={() => {}}/>
        </HeaderPanel>
    );
}