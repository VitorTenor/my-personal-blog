import {
  ColoredCompany,
  ColoredDate,
  ColoredDescription,
  ColoredPath,
  ColoredTitle,
  EducationComponentStyles,
  EducationStyles,
} from './styles';
import {
  COMPANY_PREFIX,
  DATE_PREFIX,
  DESCRIPTION_PREFIX,
  EducationComponentProps,
  EducationProps,
  SPAN_STYLE,
  TITLE_PREFIX,
} from './container';

export default function EducationComponent(props: EducationProps) {
  const createDescription = (description: string) => {
    return (
      <ColoredDescription
        message={
          <div>
            <span style={SPAN_STYLE}>{DESCRIPTION_PREFIX}</span>
            {description}
          </div>
        }
      />
    );
  };

  const createEducation = (experience: EducationComponentProps) => {
    return (
      <EducationStyles>
        <br />
        <ColoredTitle message={TITLE_PREFIX + experience.title} />
        <ColoredDate message={DATE_PREFIX + experience.date} />
        <ColoredCompany message={COMPANY_PREFIX + experience.company} />
        {experience.description.map((description) =>
          createDescription(description),
        )}
      </EducationStyles>
    );
  };

  return (
    <EducationComponentStyles>
      {props.children.map((prop) => (
        <>
          <ColoredPath message={prop.path} />
          {prop.experience.map((experience) => createEducation(experience))}
        </>
      ))}
    </EducationComponentStyles>
  );
}
