import { ReactElement } from 'react';

interface LabelProps {
  message: string;
  className?: string;
}

export default function Label(props: LabelProps): ReactElement {
  return <span className={props.className}>{props.message}</span>;
}
