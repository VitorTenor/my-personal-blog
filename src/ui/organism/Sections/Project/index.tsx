import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionProps } from '../../../../util/interface';
import { BodyStyles, ProjectStyles, TitleStyles } from './styles';
import ProjectComponent from '../../../molecule/ProjectComponent';
import useContainer from './container';

export default function Project(props: SectionProps): ReactElement {
  const { getProjects } = useContainer();
  const { t } = useTranslation();

  return (
    <ProjectStyles id={props.id}>
      <BodyStyles>
        <TitleStyles>{t('project_title')}</TitleStyles>
        <ProjectComponent props={getProjects()} />
      </BodyStyles>
    </ProjectStyles>
  );
}
