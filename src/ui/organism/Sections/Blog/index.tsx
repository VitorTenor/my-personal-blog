import { ReactElement } from 'react';
import { useTranslation } from 'react-i18next';
import { SectionProps } from '../../../../util/interface';
import { BodyStyles, BlogStyles, TitleStyles } from './styles';
import useContainer from './container';
import BlogComponent from '../../../molecule/BlogComponent';

export default function Blog(props: SectionProps): ReactElement {
  const { getContent } = useContainer();
  const { t } = useTranslation();

  return (
    <BlogStyles id={props.id}>
      <BodyStyles>
        <TitleStyles>{t('blog-title')}</TitleStyles>
        <BlogComponent props={getContent()} />
      </BodyStyles>
    </BlogStyles>
  );
}
