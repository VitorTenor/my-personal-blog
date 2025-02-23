import {
  ColoredDate,
  ColoredCompany,
  ColoredWorkTitle,
  ExperienceStyles,
  ColoredDescription,
  ExperienceComponentStyles,
} from './styles';
import {
  SPAN_STYLE,
  DATE_PREFIX,
  DESCRIPTION_PREFIX,
  ExperienceProps,
  ExperienceComponentProps,
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
