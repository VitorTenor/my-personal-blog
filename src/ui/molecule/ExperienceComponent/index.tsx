import {
  ColoredDate,
  ColoredDescription,
  ColoredCompany,
  ColoredWorkTitle,
  ExperienceComponentStyles,
  ExperienceStyles,
} from './styles';
import {
  DATE_PREFIX,
  DESCRIPTION_PREFIX,
  ExperienceComponentProps,
  ExperienceProps,
  SPAN_STYLE,
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
        <ColoredWorkTitle message={experience.title} />
        <ColoredDate message={DATE_PREFIX + experience.date} />
        {experience.description.map((description) =>
          createDescription(description),
        )}
      </ExperienceStyles>
    );
  };

  return (
    <ExperienceComponentStyles>
      {props.children.map((props) => (
        <>
          <ColoredCompany message={props.company} />
          {props.experience.map((experience) => createExperience(experience))}
        </>
      ))}
    </ExperienceComponentStyles>
  );
}
