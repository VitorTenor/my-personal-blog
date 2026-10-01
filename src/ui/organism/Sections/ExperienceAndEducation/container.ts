import { useTranslation } from 'react-i18next';
import {
  EDUCATION,
  formatPeriod,
  PROFESSIONAL_EXPERIENCE,
} from '../../../../data/profile';

export default function useContainer() {
  const { i18n, t } = useTranslation();

  function getExperience() {
    return PROFESSIONAL_EXPERIENCE.map((company) => ({
      company: company.company,
      companyDescription: t(`experience.companies.${company.id}.context`),
      experience: company.roles.map((role) => ({
        title: t(`experience.companies.${company.id}.roles.${role.id}.title`),
        date: formatPeriod(role.period, i18n.language),
        description: t(
          `experience.companies.${company.id}.roles.${role.id}.description`,
          { returnObjects: true },
        ) as string[],
      })),
    }));
  }

  function getEducation() {
    return [
      {
        experience: EDUCATION.map((education) => ({
          title: t(`education.${education.id}`),
          date: `${education.start} - ${education.end}`,
          company: education.institution,
          description: [],
        })),
      },
    ];
  }

  return { getExperience, getEducation };
}
