import styled from 'styled-components';
import { SectionContainer, SectionDescription, SectionTitle, SectionWrapper } from '../../styles/section';

export const Container = styled(SectionContainer)`
  padding: 40px 0 80px;
`;

export const Wrapper = styled(SectionWrapper)`
  padding: 80px 0;
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
`;
