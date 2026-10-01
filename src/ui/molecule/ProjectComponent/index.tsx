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
  TitleComponentStylesContact,
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
        <ColoredTitleStyles>{project.title}</ColoredTitleStyles>
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
      <TagsStyles key={tag}>
        {TAG_PREFIX}
        {tag}
        {TAG_POSFIX}
      </TagsStyles>
    );
  };

  const createTitleContact = (project: ProjectInfo) => {
    return (
      <TitleComponentStylesContact>
        <ColoredTitleStylesContact>{project.title}</ColoredTitleStylesContact>
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
      <TagsStylesContact key={tag}>
        {TAG_PREFIX}
        {tag}
        {TAG_POSFIX}
      </TagsStylesContact>
    );
  };

  const createProject = (project: ProjectInfo) => {
    const opensNewTab = project.url.startsWith('http');
    const linkProps = {
      href: project.url,
      'aria-label': project.actionLabel,
      ...(opensNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
    };

    if (project.isContact) {
      return (
        <ProjectStyles key={project.title} {...linkProps}>
          {createTitleContact(project)}
          <DescriptionStyles>{project.description}</DescriptionStyles>
          {createTagContact(project)}
        </ProjectStyles>
      );
    }

    return (
      <ProjectStyles key={project.title} {...linkProps}>
        {createTitle(project)}
        <DescriptionStyles>{project.description}</DescriptionStyles>
        {project.responsibility && (
          <DescriptionStyles>{project.responsibility}</DescriptionStyles>
        )}
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
