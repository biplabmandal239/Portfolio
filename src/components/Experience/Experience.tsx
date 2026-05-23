import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import ExperienceCard from '../Cards/ExperienceCard/ExperienceCard';
import { experiences } from '../../data/constants';
import {
  Container,
  Description,
  StyledTimelineConnector,
  StyledTimelineContent,
  TimelineSection,
  Title,
  Wrapper
} from './style';

const Experience = () => (
  <Container id="experience">
    <Wrapper>
      <Title>Experience</Title>
      <Description>
        My work experience as a software engineer and working on different companies and projects.
      </Description>
      <TimelineSection>
        <Timeline>
          {experiences.map((experience, index) => (
            <TimelineItem key={experience.id}>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== experiences.length - 1 && (
                  <StyledTimelineConnector />
                )}
              </TimelineSeparator>
              <StyledTimelineContent>
                <ExperienceCard experience={experience} />
              </StyledTimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
    </Wrapper>
  </Container>
);

export default Experience;
