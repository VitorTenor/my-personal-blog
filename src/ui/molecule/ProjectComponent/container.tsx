import { ReactElement } from 'react';

export interface ProjectInfo {
  title: string;
  description: string;
  responsibility: string;
  actionLabel: string;
  tag: string[];
  url: string;
  isContact: boolean;
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
