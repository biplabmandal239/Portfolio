import {
  Body,
  Card,
  Company,
  Date,
  Description,
  Document,
  Image,
  ItemWrapper,
  Role,
  Skill,
  Skills,
  Span,
  Top
} from './style';
import { ExperienceCardProps } from './types';

const ExperienceCard = ({ experience }: ExperienceCardProps) => (
  <Card>
    <Top>
      <Image src={experience.img} alt={experience.company} />
      <Body>
        <Role>{experience.role}</Role>
        <Company>{experience.company}</Company>
        <Date>{experience.date}</Date>
      </Body>
    </Top>
    <Description>
      {experience.desc && <Span>{experience.desc}</Span>}
      {experience.skills.length > 0 && (
        <>
          <br />
          <Skills>
            <b>Skills:</b>
            <ItemWrapper>
              {experience.skills.map((skill) => (
                <Skill key={`${experience.id}-${skill}`}>• {skill}</Skill>
              ))}
            </ItemWrapper>
          </Skills>
        </>
      )}
    </Description>
    {experience.doc && (
      <a href={experience.doc} target="new" rel="noreferrer">
        <Document src={experience.doc} alt={`${experience.company} document`} />
      </a>
    )}
  </Card>
);

export default ExperienceCard;
