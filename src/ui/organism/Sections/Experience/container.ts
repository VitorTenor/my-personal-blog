import { useTranslation } from 'react-i18next';

export default function useContainer() {
  let { t } = useTranslation();

  const dev = {
    path: t('experience_component.0.path'),
    experience: [
      {
        title: t('experience_component.0.experience.0.title'),
        date: t('experience_component.0.experience.0.date'),
        company: t('experience_component.0.experience.0.company'),
        description: [
          t('experience_component.0.experience.0.description.0'),
          t('experience_component.0.experience.0.description.1'),
          t('experience_component.0.experience.0.description.2'),
        ],
      },
    ],
  };

  const infra = {
    path: t('experience_component.1.path'),
    experience: [
      {
        title: t('experience_component.1.experience.0.title'),
        date: t('experience_component.1.experience.0.date'),
        company: t('experience_component.1.experience.0.company'),
        description: [
          t('experience_component.1.experience.0.description.0'),
          t('experience_component.1.experience.0.description.1'),
          t('experience_component.1.experience.0.description.2'),
        ],
      },
      {
        title: t('experience_component.1.experience.1.title'),
        date: t('experience_component.1.experience.1.date'),
        company: t('experience_component.1.experience.1.company'),
        description: [],
      },
    ],
  };

  return { dev, infra };
}
