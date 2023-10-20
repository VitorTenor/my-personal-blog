import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {CSSProperties, ReactElement} from "react";
import {SizeProp} from "@fortawesome/fontawesome-svg-core";

interface IconAwesomeProps {
    onClick?: () => void;
    className?: string;
    size?: SizeProp;
    icon?: any;
    key?: number;
    style?: CSSProperties;
}

export default function IconAwesome(props: IconAwesomeProps) : ReactElement {
    return (
        <FontAwesomeIcon
            style={props.style}
            key={props.key}
            icon={props.icon}
            size={props.size}
            onClick={props.onClick}
            className={props.className}
        />
    );
}
