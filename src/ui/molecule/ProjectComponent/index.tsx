import { ReactElement } from 'react';
import {
  ColoredTitleStyles,
  DescriptionStyles,
  ProjectComponentStyles,
  ProjectStyles,
  TagsStyles,
  TagComponent,
  TitleComponentStyles,
  ColoredTitleStylesContact,
  TagsStylesContact,
  TitleComponentStylesContact
} from './styles';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  ProjectComponentProps,
  ProjectInfo,
  TAG_POSFIX,
  TAG_PREFIX,
} from './container';

export default function ProjectComponent(
  props: ProjectComponentProps,
): ReactElement {
  const createTitle = (project: ProjectInfo) => {
    return (
      <TitleComponentStyles>
        <ColoredTitleStyles message={project.title} />
        <FontAwesomeIcon icon={faLink} className="icon-link" />
      </TitleComponentStyles>
    );
  };

  const createTag = (project: ProjectInfo) => {
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

  const createTitleContact = (project: ProjectInfo) => {
    return (
      <TitleComponentStylesContact>
        <ColoredTitleStylesContact message={project.title} />
        <FontAwesomeIcon icon={faLink} className="icon-link" />
      </TitleComponentStylesContact>
    );
  };

  const createTagContact = (project: ProjectInfo) => {
    return (
      <TagComponent>
        {project.tag.map((tag: string) => createTagElementContact(tag))}
      </TagComponent>
    );
  };

  const createTagElementContact = (tag: string) => {
    return (
      <TagsStylesContact>
        {TAG_PREFIX}
        {tag}
        {TAG_POSFIX}
      </TagsStylesContact>
    );
  };

  const createProject = (project: ProjectInfo) => {
    if (project.isContact) {
      return (
        <ProjectStyles onClick={() => window.open(`${project.github}`, '_blank')}>
          {createTitleContact(project)}
          <DescriptionStyles>{project.description}</DescriptionStyles>
          {createTagContact(project)}
        </ProjectStyles>
      );
    }

    return (
      <ProjectStyles onClick={() => window.open(`${project.github}`, '_blank')}>
        {createTitle(project)}
        <DescriptionStyles>{project.description}</DescriptionStyles>
        {createTag(project)}
      </ProjectStyles>
    );
  };

  return (
    <ProjectComponentStyles>
      {props.props.map((project: ProjectInfo) => createProject(project))}
    </ProjectComponentStyles>
  );
}
