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
        key={description}
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
      <article key={`${experience.title}-${experience.date}`}>
        <ColoredTitle>{experience.title}</ColoredTitle>
        <EducationStyles>
          <br />
          <ColoredDate message={DATE_PREFIX + experience.date} />
          <ColoredCompany message={COMPANY_PREFIX + experience.company} />
          {experience.description.map((description) =>
            createDescription(description),
          )}
        </EducationStyles>
      </article>
    );
  };

  return (
    <EducationComponentStyles>
      {props.children.map((prop) => (
        <div key={prop.experience.map((item) => item.title).join('-')}>
          {prop.experience.map((experience) => createEducation(experience))}
        </div>
      ))}
    </EducationComponentStyles>
  );
}
