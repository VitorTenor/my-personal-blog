import { ReactElement } from 'react';
import { SectionProps } from '../../../../util/interface';
import { AboutStyles } from './styles';

export default function About(props: SectionProps): ReactElement {
  return (
    <>
      <AboutStyles id={props.id}> Im here </AboutStyles>
    </>
  );
}
