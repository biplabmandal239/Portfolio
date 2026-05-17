import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import {
  Button,
  ButtonGroup,
  Container,
  Date,
  Description,
  ExternalLink,
  Image,
  Label,
  Member,
  MemberImage,
  MemberName,
  Members,
  StyledModal,
  Tag,
  Tags,
  Title,
  Wrapper
} from './style';
import { ProjectDetailsProps } from './types';

const ProjectDetails = ({ openModal, setOpenModal }: ProjectDetailsProps) => {
  const project = openModal.project;

  if (!project) {
    return null;
  }

  return (
    <StyledModal open onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseRounded
            style={{ position: 'absolute', top: '10px', right: '20px', cursor: 'pointer' }}
            onClick={() => setOpenModal({ state: false, project: null })}
          />
          <Image src={project.image} alt={project.title} />
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Tags>
            {project.tags.map((tag) => (
              <Tag key={`${project.id}-${tag}`}>{tag}</Tag>
            ))}
          </Tags>
          <Description>{project.description}</Description>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members>
                {project.member.map((member) => (
                  <Member key={`${project.id}-${member.name}`}>
                    <MemberImage src={member.img} alt={member.name} />
                    <MemberName>{member.name}</MemberName>
                    <ExternalLink href={member.github} target="new" rel="noreferrer">
                      <GitHub />
                    </ExternalLink>
                    <ExternalLink href={member.linkedin} target="new" rel="noreferrer">
                      <LinkedIn />
                    </ExternalLink>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup>
            <Button $dull href={project.github} target="new" rel="noreferrer">
              View Code
            </Button>
            <Button href={project.webapp} target="new" rel="noreferrer">
              View Live App
            </Button>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </StyledModal>
  );
};

export default ProjectDetails;
