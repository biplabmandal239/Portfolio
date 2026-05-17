import { Body, Card, Date, Degree, Description, Grade, Image, Name, Span, Top } from './style';
import { EducationCardProps } from './types';

const EducationCard = ({ education }: EducationCardProps) => (
  <Card>
    <Top>
      <Image src={education.img} alt={education.school} />
      <Body>
        <Name>{education.school}</Name>
        <Degree>{education.degree}</Degree>
        <Date>{education.date}</Date>
      </Body>
    </Top>
    <Grade>
      <b>Grade: </b>
      {education.grade}
    </Grade>
    <Description>
      <Span>{education.desc}</Span>
    </Description>
  </Card>
);

export default EducationCard;
