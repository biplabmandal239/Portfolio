import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import EducationCard from '../Cards/EducationCard/EducationCard';
import { education } from '../../data/constants';
import {
  Container,
  Description,
  StyledTimelineConnector,
  StyledTimelineContent,
  TimelineSection,
  Title,
  Wrapper
} from './style';

const Education = () => (
  <Container id="education">
    <Wrapper>
      <Title>Education</Title>
      <Description>
        My education has been a journey of self-discovery and growth. My educational details are
        as follows.
      </Description>
      <TimelineSection>
        <Timeline>
          {education.map((item, index) => (
            <TimelineItem key={item.id}>
              <StyledTimelineContent>
                <EducationCard education={item} />
              </StyledTimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== education.length - 1 && (
                  <StyledTimelineConnector />
                )}
              </TimelineSeparator>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
    </Wrapper>
  </Container>
);

export default Education;
