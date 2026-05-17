import { Fragment, useState } from 'react';
import ProjectCard from '../Cards/ProjectCard/ProjectCard';
import { projects } from '../../data/constants';
import {
  CardContainer,
  Container,
  Description,
  Divider,
  Title,
  ToggleButton,
  ToggleButtonGroup,
  Wrapper
} from './style';
import { ProjectFilter, ProjectsProps } from './types';

const filters: ProjectFilter[] = ['all', 'web app', 'android app'];

const getLabel = (filter: ProjectFilter): string => {
  if (filter === 'all') {
    return 'All';
  }

  return `${filter.toUpperCase()}${filter === 'machine learning' ? '' : "'S"}`;
};

const Projects = ({ setOpenModal }: ProjectsProps) => {
  const [toggle, setToggle] = useState<ProjectFilter>('all');

  const filteredProjects =
    toggle === 'all' ? projects : projects.filter((item) => item.category === toggle);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Description>
          I have worked on a wide range of projects. From web apps to android apps. Here are some
          of my projects.
        </Description>
        <ToggleButtonGroup>
          {filters.map((filter, index) => (
            <Fragment key={filter}>
              <ToggleButton
                type="button"
                $active={toggle === filter}
                onClick={() => setToggle(filter)}
              >
                {getLabel(filter)}
              </ToggleButton>
              {index < filters.length - 1 && <Divider />}
            </Fragment>
          ))}
        </ToggleButtonGroup>
        <CardContainer>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
