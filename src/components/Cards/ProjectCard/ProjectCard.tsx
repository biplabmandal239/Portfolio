import {
  Card,
  Date,
  Description,
  Details,
  Image,
  MemberAvatar,
  Members,
  Tag,
  Tags,
  Title
} from './style';
import { ProjectCardProps } from './types';

const ProjectCard = ({ project, setOpenModal }: ProjectCardProps) => (
  <Card onClick={() => setOpenModal({ state: true, project })}>
    <Image src={project.image} alt={project.title} />
    <Tags>
      {project.tags.map((tag) => (
        <Tag key={`${project.id}-${tag}`} label={tag} size="small" />
      ))}
    </Tags>
    <Details>
      <Title>{project.title}</Title>
      <Date>{project.date}</Date>
      <Description>{project.description}</Description>
    </Details>
    <Members>
      {project.member?.map((member) => (
        <MemberAvatar key={`${project.id}-${member.name}`} src={member.img} alt={member.name} />
      ))}
    </Members>
  </Card>
);

export default ProjectCard;
