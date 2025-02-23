import {
  ColoredTitle,
  ColoredDate,
  ColoredCompany,
  EducationStyles,
  ColoredDescription,
  EducationComponentStyles,
} from './styles';
import {
  SPAN_STYLE,
  DATE_PREFIX,
  COMPANY_PREFIX,
  DESCRIPTION_PREFIX,
  EducationProps,
  EducationComponentProps,
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
      <>
        <ColoredTitle message={experience.title} />
        <EducationStyles>
          <br />
          <ColoredDate message={DATE_PREFIX + experience.date} />
          <ColoredCompany message={COMPANY_PREFIX + experience.company} />
          {experience.description.map((description) =>
            createDescription(description)
          )}
        </EducationStyles>
      </>
    );
  };

  return (
    <EducationComponentStyles>
      {props.children.map((prop) => (
        <>{prop.experience.map((experience) => createEducation(experience))}</>
      ))}
    </EducationComponentStyles>
  );
}
