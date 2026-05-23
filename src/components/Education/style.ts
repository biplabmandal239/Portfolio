import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import styled from 'styled-components';
import { SectionContainer, SectionDescription, SectionTitle, SectionWrapper } from '../../styles/section';

export const Container = styled(SectionContainer)`
  padding: 0 0 60px;
`;

export const Wrapper = styled(SectionWrapper)`
  padding: 40px 0 0;
`;

export const Title = SectionTitle;
export const Description = SectionDescription;

export const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;

  @media (max-width: 660px) {
    align-items: flex-end;
  }
`;

export const StyledTimelineConnector = styled(TimelineConnector)`
  &.MuiTimelineConnector-root {
    background: #854ce6;
  }
`;

export const StyledTimelineContent = styled(TimelineContent)`
  &.MuiTimelineContent-root {
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 16px;
    padding-right: 16px;
  }
`;
