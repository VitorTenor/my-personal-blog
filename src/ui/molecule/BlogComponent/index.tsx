import { ReactElement } from 'react';
import {
  ColoredTitleStyles,
  DescriptionStyles,
  BlogComponentStyles,
  BlogtStyles,
  TagsStyles,
  TagComponent,
  TitleComponentStyles,
} from './styles';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BlogComponentProps,
  BlogInfo,
  TAG_POSFIX,
  TAG_PREFIX,
} from './container';

export default function BlogComponent(
  props: BlogComponentProps,
): ReactElement {
  const createTitle = (project: BlogInfo) => {
    return (
      <TitleComponentStyles>
        <ColoredTitleStyles message={project.title} />
        <FontAwesomeIcon icon={faLink} className="icon-link" />
      </TitleComponentStyles>
    );
  };

  const createTag = (project: BlogInfo) => {
    return (
      <TagComponent>
        {project.tag.map((tag: string) => createTagElement(tag))}
      </TagComponent>
    );
  };

  const createTagElement = (tag: string) => {
    return (
      <TagsStyles>
        {TAG_PREFIX}
        {tag}
        {TAG_POSFIX}
      </TagsStyles>
    );
  };

  const createProject = (project: BlogInfo) => {
    return (
      <BlogtStyles onClick={() => window.open(`${project.link}`, '_blank')}>
        {createTitle(project)}
        <DescriptionStyles>{project.description}</DescriptionStyles>
        {createTag(project)}
      </BlogtStyles>
    );
  };

  return (
    <BlogComponentStyles>
      {props.props.map((project: BlogInfo) => createProject(project))}
    </BlogComponentStyles>
  );
}
