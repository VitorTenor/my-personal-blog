import { useTranslation } from 'react-i18next';
import { PROJECTS } from '../../../../data/profile';
import { ProjectInfo } from '../../../molecule/ProjectComponent/container';

export default function useContainer() {
  const { t } = useTranslation();

  function getProjects(): ProjectInfo[] {
    return PROJECTS.map((project) => ({
      title: t(`projects.${project.id}.title`),
      description: t(`projects.${project.id}.description`),
      responsibility: t(`projects.${project.id}.responsibility`, {
        defaultValue: '',
      }),
      actionLabel: t(`projects.${project.id}.action`, {
        defaultValue: t(`projects.${project.id}.title`),
      }),
      tag:
        project.id === 'makai' ? [t('projects.makai.role')] : [...project.tags],
      url: project.url,
      isContact: project.id === 'contact',
    }));
  }

  return { getProjects };
}
