import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionProps } from '../../../../util/interface';
import {
  EducationStyles,
  ExperienceStyles,
  ProfessionalExperienceStyles,
  TitleStyles,
} from './styles';
import ExperienceComponent from '../../../molecule/ExperienceComponent';
import useContainer from './container';

export default function Experience(props: SectionProps): ReactElement {
  const { t } = useTranslation();
  const { dev, infra } = useContainer();
  return (
    <ExperienceStyles id={props.id}>
      <ProfessionalExperienceStyles>
        <TitleStyles>{t('professional_experience')}</TitleStyles>
        <ExperienceComponent childrens={[dev, infra]} />
        <br />
      </ProfessionalExperienceStyles>

      <EducationStyles>
        <TitleStyles>{t('academic_education')}</TitleStyles>
        <ExperienceComponent childrens={[dev, infra]} />
      </EducationStyles>
    </ExperienceStyles>
  );
}
