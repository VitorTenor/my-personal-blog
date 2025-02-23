import { CSSProperties } from 'styled-components';
import { globalColor } from '../../../styles/GlobalStyles';

export const DATE_PREFIX: string = '-> ';
export const DESCRIPTION_PREFIX: string = '$ ';

export const SPAN_STYLE: CSSProperties = {
  color: `${globalColor.quaternary}`,
};

export interface ExperienceComponentProps {
  title: string;
  date: string;
  workType: string;
  description: string[];
}

export interface ExperienceElementProps {
  path: string;
  company: string;
  experience: ExperienceComponentProps[];
}

export interface ExperienceProps {
  children: ExperienceElementProps[];
}
