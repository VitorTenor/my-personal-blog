import { ReactElement } from 'react';

interface LabelProps {
  message: string;
  className?: string;
}

export default function Label(props: LabelProps): ReactElement {
  return <label className={props.className}>{props.message}</label>;
}
