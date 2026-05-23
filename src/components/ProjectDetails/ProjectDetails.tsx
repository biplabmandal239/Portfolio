import { CloseRounded, GitHub, LinkedIn } from '@mui/icons-material';
import {
  ActionButton,
  ButtonGroup,
  CloseButton,
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
    <StyledModal open={openModal.state} onClose={() => setOpenModal({ state: false, project: null })}>
      <Container>
        <Wrapper>
          <CloseButton
            aria-label="Close project details"
            onClick={() => setOpenModal({ state: false, project: null })}
          >
            <CloseRounded />
          </CloseButton>
          <Image src={project.image} alt={project.title} />
          <Title>{project.title}</Title>
          <Date>{project.date}</Date>
          <Tags direction="row" flexWrap="wrap">
            {project.tags.map((tag) => (
              <Tag key={`${project.id}-${tag}`} label={tag} />
            ))}
          </Tags>
          <Description>{project.description}</Description>
          {project.member && (
            <>
              <Label>Members</Label>
              <Members spacing={0.75}>
                {project.member.map((member) => (
                  <Member
                    key={`${project.id}-${member.name}`}
                    direction="row"
                    spacing={1.5}
                  >
                    <MemberImage src={member.img} alt={member.name} />
                    <MemberName>{member.name}</MemberName>
                    <ExternalLink href={member.github} target="_blank" rel="noreferrer">
                      <GitHub />
                    </ExternalLink>
                    <ExternalLink href={member.linkedin} target="_blank" rel="noreferrer">
                      <LinkedIn />
                    </ExternalLink>
                  </Member>
                ))}
              </Members>
            </>
          )}
          <ButtonGroup direction="row" spacing={1.5} justifyContent="flex-end">
            {project.showCodeButton && (
              <ActionButton
                component="a"
                href={project.github}
                target="_blank"
                rel="noreferrer"
                fullWidth
                $dull
              >
                View Code
              </ActionButton>
            )}
            <ActionButton
              component="a"
              href={project.webapp}
              target="_blank"
              rel="noreferrer"
              fullWidth
            >
              View Live App
            </ActionButton>
          </ButtonGroup>
        </Wrapper>
      </Container>
    </StyledModal>
  );
};

export default ProjectDetails;
