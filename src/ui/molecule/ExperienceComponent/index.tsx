import { ExperienceComponentStyles } from './styles';
import ColoredText from '../../atom/ColoredText';
import {
  COMPANY_PREFIX,
  COMPANY_STYLE,
  DATE_PREFIX,
  DATE_STYLE,
  DESCRIPTION_PREFIX,
  DESCRIPTION_STYLE,
  PATH_STYLE,
  SPAN_STYLE,
  TITLE_PREFIX,
  TITLE_STYLE,
} from './container';

interface ExperienceComponentProps {
  title: string;
  date: string;
  company: string;
  description: string[];
}

export interface ExperienceElementProps {
  path: string;
  experience: ExperienceComponentProps[];
}

export interface ExperienceProps {
  childrens: ExperienceElementProps[];
}

export default function ExperienceComponent(props: ExperienceProps) {
  const createDescription = (description: string) => {
    return (
      <ColoredText
        message={
          <div>
            <span style={SPAN_STYLE}>{DESCRIPTION_PREFIX}</span>
            {description}
          </div>
        }
        style={DESCRIPTION_STYLE}
      />
    );
  };

  const createExperience = (experience: ExperienceComponentProps) => {
    return (
      <>
        <ColoredText
          message={TITLE_PREFIX + experience.title}
          style={TITLE_STYLE}
        />
        <ColoredText
          message={DATE_PREFIX + experience.date}
          style={DATE_STYLE}
        />
        <ColoredText
          message={COMPANY_PREFIX + experience.company}
          style={COMPANY_STYLE}
        />
        {experience.description.map((description) =>
          createDescription(description),
        )}
      </>
    );
  };

  return (
    <ExperienceComponentStyles>
      {props.childrens.map((prop) => (
        <>
          <ColoredText message={prop.path} style={PATH_STYLE} />
          {prop.experience.map((experience) => createExperience(experience))}
        </>
      ))}
    </ExperienceComponentStyles>
  );
}
