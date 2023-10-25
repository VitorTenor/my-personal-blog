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
import useContainer, { ExperienceType } from './container';

export default function Experience(props: SectionProps): ReactElement {
  const { t } = useTranslation();
  const { getExperience } = useContainer();
  return (
    <ExperienceStyles id={props.id}>
      <ProfessionalExperienceStyles>
        <TitleStyles>{t('professional_experience')}</TitleStyles>
        <ExperienceComponent
          childrens={getExperience(ExperienceType.PROFESSIONAL)}
        />
        <br />
      </ProfessionalExperienceStyles>

      <EducationStyles>
        <TitleStyles>{t('academic_education')}</TitleStyles>
        <ExperienceComponent
          childrens={getExperience(ExperienceType.ACADEMIC)}
        />
      </EducationStyles>
    </ExperienceStyles>
  );
}
