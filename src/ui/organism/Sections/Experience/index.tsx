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

export default function Experience(props: SectionProps): ReactElement {
  const { t } = useTranslation();

  const experienceComponent = {
    path: '~/experience/dev',
    experience: [
      {
        title: 'Software_Developer',
        date: '2022 - Present',
        company: 'Company',
        description: [
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean1',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean2',
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean3',
        ],
      },
    ],
  };

  return (
    <ExperienceStyles id={props.id}>
      <ProfessionalExperienceStyles>
        <TitleStyles>{t('professional_experience')}</TitleStyles>
        <ExperienceComponent childrens={[experienceComponent]} />
      </ProfessionalExperienceStyles>

      <EducationStyles>
        <TitleStyles>{t('academic_education')}</TitleStyles>
      </EducationStyles>
    </ExperienceStyles>
  );
}
