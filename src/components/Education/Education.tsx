import Timeline from '@mui/lab/Timeline';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import EducationCard from '../Cards/EducationCard/EducationCard';
import { education } from '../../data/constants';
import { Container, Description, TimelineSection, Title, Wrapper } from './style';

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
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <EducationCard education={item} />
              </TimelineContent>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                {index !== education.length - 1 && (
                  <TimelineConnector style={{ background: '#854CE6' }} />
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
