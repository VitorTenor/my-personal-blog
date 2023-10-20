import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLanguage} from "@fortawesome/free-solid-svg-icons";
import {ReactElement} from "react";

interface TranslateProps {
    onClick: () => void;
    className?: string;
    size?: "1x" | "2x" | "3x" | "4x" | "5x";
}

export default function Translate(props: TranslateProps) : ReactElement {
    return (
        <>
            <FontAwesomeIcon onClick={props.onClick} className={props.className} icon={faLanguage} size={props.size}  />;
        </>
    );
}
