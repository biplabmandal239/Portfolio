import styled from 'styled-components';
import { layout, media, spacing } from './theme';

export const SectionContainer = styled.section<{ $padding?: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: ${({ $padding = '0' }) => $padding};

  ${media.desktop} {
    padding: 0;
  }
`;

export const SectionWrapper = styled.div<{ $maxWidth?: string; $padding?: string }>`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: ${({ $maxWidth = layout.maxSectionWidth }) => $maxWidth};
  padding: ${({ $padding = '0' }) => $padding};
  gap: ${spacing.md};

  ${media.desktop} {
    flex-direction: column;
  }
`;

export const SectionTitle = styled.h2`
  margin: ${spacing.xl} 0 0;
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};

  ${media.tablet} {
    margin-top: ${spacing.md};
    font-size: 32px;
  }
`;

export const SectionDescription = styled.p`
  margin: 0;
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.textSecondary};

  ${media.tablet} {
    margin-top: ${spacing.md};
    font-size: 16px;
  }
`;
