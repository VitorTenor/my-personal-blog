import { useTranslation } from 'react-i18next';
import { ProjectInfo } from '../../../molecule/ProjectComponent/container';
import { GITHUB_LINK } from '../../../../util/constants';

export default function useContainer() {
  const { t } = useTranslation();

  function getProjects() {
    const lengthComponent: number = parseInt(t('project_info.length'));

    const project_component = [];

    for (let i = 0; i < lengthComponent; i++) {
      const title = t(`project_info.${i}.title`);
      const description = t(`project_info.${i}.description`);
      const github = GITHUB_LINK + t(`project_info.${i}.uri_github`);
      const tagLength = parseInt(t(`project_info.${i}.tag.length`));

      const tag = [];
      for (let j = 0; j < tagLength; j++) {
        tag.push(t(`project_info.${i}.tag.${j}`));
      }

      const project: ProjectInfo = {
        title,
        description,
        tag,
        github,
      };

      project_component.push(project);
    }

    return project_component;
  }
  return {
    getProjects,
  };
}
