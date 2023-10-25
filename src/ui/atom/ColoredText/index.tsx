import { ReactElement } from 'react';
import { CSSProperties } from 'styled-components';

interface ColoredTextProps {
  style?: CSSProperties;
  message: ReactElement | string;
  className?: string;
}

export default function ColoredText(props: ColoredTextProps): ReactElement {
  return (
    <label className={props.className} style={props.style}>
      {props.message}
    </label>
  );
}
