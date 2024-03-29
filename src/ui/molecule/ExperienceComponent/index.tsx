import {
  ColoredCompany,
  ColoredDate,
  ColoredDescription,
  ColoredPath,
  ColoredTitle,
  ExperienceComponentStyles,
  ExperienceStyles,
} from './styles';
import {
  COMPANY_PREFIX,
  DATE_PREFIX,
  DESCRIPTION_PREFIX,
  ExperienceComponentProps,
  ExperienceProps,
  SPAN_STYLE,
  TITLE_PREFIX,
} from './container';

export default function ExperienceComponent(props: ExperienceProps) {
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

  const createExperience = (experience: ExperienceComponentProps) => {
    return (
      <ExperienceStyles>
        <br />
        <ColoredTitle message={TITLE_PREFIX + experience.title} />
        <ColoredDate message={DATE_PREFIX + experience.date} />
        <ColoredCompany message={COMPANY_PREFIX + experience.company} />
        {experience.description.map((description) =>
          createDescription(description),
        )}
      </ExperienceStyles>
    );
  };

  return (
    <ExperienceComponentStyles>
      {props.childrens.map((prop) => (
        <>
          <ColoredPath message={prop.path} />
          {prop.experience.map((experience) => createExperience(experience))}
        </>
      ))}
    </ExperienceComponentStyles>
  );
}
