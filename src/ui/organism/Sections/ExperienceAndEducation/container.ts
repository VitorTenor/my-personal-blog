import { t } from 'i18next';

enum Type {
  PROFESSIONAL = 'professional_experience_info',
  ACADEMIC = 'academic_education_info',
}

export default function useContainer() {
  return { getExperience, getEducation };
}

function getExperience() {
  const experienceType = Type.PROFESSIONAL;
  const lengthComponent: number = parseInt(t(`${experienceType}.length`));
  const experience_component = [];

  for (let i = 0; i < lengthComponent; i++) {
    const path = t(`${experienceType}.${i}.path`);
    const company = t(`${experienceType}.${i}.company`);
    const experience = [];
    const lengthExperience: number = parseInt(
      t(`${experienceType}.${i}.experience.length`),
    );

    for (let j = 0; j < lengthExperience; j++) {
      const title = t(`${experienceType}.${i}.experience.${j}.title`);
      const date = t(`${experienceType}.${i}.experience.${j}.date`);
      const workType = t(`${experienceType}.${i}.experience.${j}.work_type`);

      const description = [];
      const lengthDescription: number = parseInt(
        t(`${experienceType}.${i}.experience.${j}.description.length`),
      );
      for (let k = 0; k < lengthDescription; k++) {
        description.push(
          t(`${experienceType}.${i}.experience.${j}.description.${k}`),
        );
      }

      const experienceItem = {
        title,
        date,
        workType,
        description,
      };

      experience.push(experienceItem);
    }

    const component = {
      path,
      company,
      experience,
    };

    experience_component.push(component);
  }
  return experience_component;
}

function getEducation() {
  const experienceType = Type.ACADEMIC;
  const lengthComponent: number = parseInt(t(`${experienceType}.length`));
  const experience_component = [];

  for (let i = 0; i < lengthComponent; i++) {
    const path = t(`${experienceType}.${i}.path`);
    const experience = [];
    const lengthExperience: number = parseInt(
      t(`${experienceType}.${i}.experience.length`),
    );

    for (let j = 0; j < lengthExperience; j++) {
      const title = t(`${experienceType}.${i}.experience.${j}.title`);
      const date = t(`${experienceType}.${i}.experience.${j}.date`);
      const company = t(`${experienceType}.${i}.experience.${j}.company`);

      const description = [];
      const lengthDescription: number = parseInt(
        t(`${experienceType}.${i}.experience.${j}.description.length`),
      );
      for (let k = 0; k < lengthDescription; k++) {
        description.push(
          t(`${experienceType}.${i}.experience.${j}.description.${k}`),
        );
      }

      const experienceItem = {
        title,
        date,
        company,
        description,
      };

      experience.push(experienceItem);
    }

    const component = {
      path,
      experience,
    };

    experience_component.push(component);
  }
  return experience_component;
}
