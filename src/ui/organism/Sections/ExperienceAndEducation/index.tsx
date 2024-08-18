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
import EducationComponent from '../../../molecule/EducationComponent';

export default function ExperienceAndEducation(
  props: SectionProps,
): ReactElement {
  const { t } = useTranslation();
  const { getExperience, getEducation } = useContainer();
  return (
    <ExperienceStyles id={props.id}>
      <ProfessionalExperienceStyles>
        <TitleStyles>{t('professional_experience')}</TitleStyles>
        <ExperienceComponent children={getExperience()} />
        <br />
      </ProfessionalExperienceStyles>

      <EducationStyles>
        <TitleStyles>{t('academic_education')}</TitleStyles>
        <EducationComponent children={getEducation()} />
        <br />
      </EducationStyles>
    </ExperienceStyles>
  );
}
