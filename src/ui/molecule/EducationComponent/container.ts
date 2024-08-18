import { CSSProperties } from 'styled-components';
import { globalColor } from '../../../styles/GlobalStyles';

export const TITLE_PREFIX: string = './';
export const DATE_PREFIX: string = '-> ';
export const COMPANY_PREFIX: string = '-> ';
export const DESCRIPTION_PREFIX: string = '$ ';

export const SPAN_STYLE: CSSProperties = {
  color: `${globalColor.quaternary}`,
};

export interface EducationComponentProps {
  title: string;
  date: string;
  company: string;
  description: string[];
}

export interface EducationElementProps {
  path: string;
  experience: EducationComponentProps[];
}

export interface EducationProps {
  children: EducationElementProps[];
}
