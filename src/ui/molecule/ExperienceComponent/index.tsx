import {
  ColoredDate,
  ColoredCompany,
  ColoredWorkTitle,
  ExperienceStyles,
  ColoredDescription,
  CompanyDescription,
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

  const createExperience = (experience: ExperienceComponentProps) => {
    return (
      <ExperienceStyles key={`${experience.title}-${experience.date}`}>
        <br />
        <ColoredWorkTitle>{experience.title}</ColoredWorkTitle>
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
        <article key={props.company}>
          <ColoredCompany>{props.company}</ColoredCompany>
          <CompanyDescription>{props.companyDescription}</CompanyDescription>
          {props.experience.map((experience) => createExperience(experience))}
        </article>
      ))}
    </ExperienceComponentStyles>
  );
}
