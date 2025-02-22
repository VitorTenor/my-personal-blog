import { ReactElement } from 'react';

export interface BlogInfo {
  title: string;
  description: string;
  tag: string[];
  link: string;
}

export interface BlogComponentProps {
  props: BlogInfo[];
}

export const TAG_PREFIX: ReactElement = (
  <span className="prefix-tag">{'<'}</span>
);
export const TAG_POSFIX: ReactElement = (
  <span className="postfix-tag">{'/>'}</span>
);
export const TITLE_PREFIX: string = './';
