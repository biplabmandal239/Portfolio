import { Box, ButtonBase, Divider, Typography } from '@mui/material';
import styled from 'styled-components';
import { gradients, layout, spacing } from '../../styles/theme';
import { ToggleButtonProps } from './types';

export const Container = styled(Box).attrs({ component: 'section' })`
  background: ${gradients.projectAccent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled(Box)`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: ${layout.maxSectionWidth};
  gap: ${spacing.md};
  padding-top: 10px;
  padding-bottom: 100px;
`;

export const Title = styled(Typography).attrs({ component: 'h2' })`
  &.MuiTypography-root {
    margin-top: ${spacing.xl};
    font-size: 42px;
    text-align: center;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};
  }

  @media (max-width: 768px) {
    &.MuiTypography-root {
      font-size: 32px;
    }
  }
`;

export const Description = styled(Typography)`
  &.MuiTypography-root {
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.textSecondary};
  }

  @media (max-width: 768px) {
    &.MuiTypography-root {
      font-size: 16px;
    }
  }
`;

export const ToggleButtonGroup = styled(Box)`
  display: flex;
  border: 1.5px solid ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  border-radius: 12px;
  font-weight: 500;
  margin: 22px 0;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const ToggleButton = styled(ButtonBase)<ToggleButtonProps>`
  padding: 8px 18px;
  border-radius: 6px;
  color: inherit;
  background: ${({ $active, theme }) => ($active ? `${theme.primary}20` : 'transparent')};

  &:hover {
    background: ${({ theme }) => `${theme.primary}08`};
  }

  @media (max-width: 768px) {
    padding: 6px 8px;
    border-radius: 4px;
  }
`;

export const StyledDivider = styled(Divider)`
  &.MuiDivider-root {
    border-color: ${({ theme }) => theme.primary};
  }
`;

export const CardContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;
