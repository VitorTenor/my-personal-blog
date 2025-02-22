import { useTranslation } from 'react-i18next';
import { BlogInfo } from '../../../molecule/BlogComponent/container';

export default function useContainer() {
  const { t } = useTranslation();

  function getContent() {
    const lengthComponent: number = parseInt(t('blog-info.length'));

    const blog_component = [];

    for (let i = 0; i < lengthComponent; i++) {
      const title = t(`blog-info.${i}.title`);
      const description = t(`blog-info.${i}.description`);
      const link = t(`blog-info.${i}.link`);
      const tagLength = parseInt(t(`blog-info.${i}.tag.length`));

      const tag = [];
      for (let j = 0; j < tagLength; j++) {
        tag.push(t(`blog-info.${i}.tag.${j}`));
      }

      const blog: BlogInfo = {
        title,
        description,
        tag,
        link,
      };

      blog_component.push(blog);
    }

    return blog_component;
  }
  return {
    getContent,
  };
}
