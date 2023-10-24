import { CSSProperties } from 'styled-components';
import { globalColor } from '../../../styles/GlobalStyles';

export const TITLE_PREFIX: string = './';
export const DATE_PREFIX: string = '-> ';
export const COMPANY_PREFIX: string = '-> ';
export const DESCRIPTION_PREFIX: string = '$ ';

export const PATH_STYLE: CSSProperties = {
  fontSize: '20px',
  fontWeight: '400',
  color: `${globalColor.primary}`,
  marginBottom: '15px',
};

export const TITLE_STYLE: CSSProperties = {
  fontSize: '20px',
  fontWeight: '500',
  color: `${globalColor.quaternary}`,
  marginBottom: '10px',
  marginLeft: '20%',
  marginTop: '10px',
  display: 'flex',
  wordBreak: 'break-all',
};

export const DATE_STYLE: CSSProperties = {
  fontSize: '15px',
  fontWeight: '500',
  color: `${globalColor.secondary}`,
  marginBottom: '10px',
  marginLeft: '25%',
  marginTop: '10px',
  display: 'flex',
};

export const COMPANY_STYLE: CSSProperties = {
  fontSize: '15px',
  fontWeight: '500',
  color: `${globalColor.secondary}`,
  marginBottom: '10px',
  marginLeft: '25%',
  marginTop: '10px',
  display: 'flex',
};

export const DESCRIPTION_STYLE: CSSProperties = {
  fontSize: '15px',
  fontWeight: '500',
  color: `${globalColor.secondary}`,
  marginBottom: '10px',
  marginLeft: '25%',
  marginTop: '10px',
  display: 'flex',
};

export const SPAN_STYLE: CSSProperties = {
  color: `${globalColor.quaternary}`,
};
