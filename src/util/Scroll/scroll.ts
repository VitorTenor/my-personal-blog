import smoothScroll from './scrollConfig.ts';

export const scrollTo = (value: string): void => {
  smoothScroll(value, 1000);
};
