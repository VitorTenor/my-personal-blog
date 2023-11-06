import { ReactElement } from 'react';

export interface ProjectInfo {
  title: string;
  description: string;
  tag: string[];
  github: string;
}

export interface ProjectComponentProps {
  props: ProjectInfo[];
}

export const TAG_PREFIX: ReactElement = (
  <span className="prefix-tag">{'<'}</span>
);
export const TAG_POSFIX: ReactElement = (
  <span className="postfix-tag">{'/>'}</span>
);
export const TITLE_PREFIX: string = './';
