import {
  ColoredCompany,
  ColoredDate,
  ColoredDescription,
  ColoredPath,
  ColoredTitle,
  ColoredWorkType,
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
  WORK_TYPE_PREFIX,
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
        <ColoredWorkType message={WORK_TYPE_PREFIX + experience.workType} />
        {experience.description.map((description) =>
          createDescription(description),
        )}
      </ExperienceStyles>
    );
  };

  return (
    <ExperienceComponentStyles>
      {props.children.map((prop) => (
        <>
          <ColoredPath message={prop.path} />
          <ColoredCompany message={COMPANY_PREFIX + prop.company} />
          {prop.experience.map((experience) => createExperience(experience))}
        </>
      ))}
    </ExperienceComponentStyles>
  );
}
