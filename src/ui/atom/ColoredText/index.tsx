import { ReactElement } from 'react';
import { CSSProperties } from 'styled-components';

interface ColoredTextProps {
  style?: CSSProperties;
  message: ReactElement | string;
}

export default function ColoredText(props: ColoredTextProps): ReactElement {
  return <label style={props.style}>{props.message}</label>;
}
