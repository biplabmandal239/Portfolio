import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import ExperienceCard from '../Cards/ExperienceCard/ExperienceCard';
import { experiences } from '../../data/constants';
import { Container, Description, TimelineSection, Title, Wrapper } from './style';

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
                  <TimelineConnector style={{ background: '#854CE6' }} />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <ExperienceCard experience={experience} />
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
    </Wrapper>
  </Container>
);

export default Experience;
