import { ReactElement } from 'react';

interface ParagraphProps {
  message: string;
  className?: string;
}

export default function Paragraph(props: ParagraphProps): ReactElement {
  return <p className={props.className}>{props.message}</p>;
}
