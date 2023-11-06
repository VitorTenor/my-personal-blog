import { ReactElement } from 'react';
import { SectionProps } from '../../../../util/interface';
import { ProjectStyles, TitleStyles } from './styles';

export default function Project(props: SectionProps): ReactElement {
  return (
    <ProjectStyles id={props.id}>
      <TitleStyles>Project</TitleStyles>
    </ProjectStyles>
  );
}
