import styled from 'styled-components';
import { media } from '../../../styles/theme';
import { Card, Description, Document, Span, Top, Image, Body, Date } from '../ExperienceCard/style';

export { Card, Description, Document, Span, Top, Image, Body, Date };

export const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => `${theme.textPrimary}99`};

  ${media.tablet} {
    font-size: 14px;
  }
`;

export const Degree = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => `${theme.textSecondary}99`};

  ${media.tablet} {
    font-size: 12px;
  }
`;

export const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => `${theme.textSecondary}99`};

  ${media.tablet} {
    font-size: 12px;
  }
`;
