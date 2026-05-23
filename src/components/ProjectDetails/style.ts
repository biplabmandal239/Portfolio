import {
  Avatar,
  Box,
  Button,
  Chip,
  IconButton,
  Link,
  Modal,
  Stack,
  Typography
} from '@mui/material';
import styled from 'styled-components';
import { layout, radii } from '../../styles/theme';

export const StyledModal = styled(Modal)``;

export const Container = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.overlay};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  transition: all 0.5s ease;
`;

export const Wrapper = styled(Box)`
  max-width: ${layout.maxModalWidth};
  width: 100%;
  border-radius: ${radii.lg};
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.textPrimary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const CloseButton = styled(IconButton)`
  &.MuiButtonBase-root {
    position: absolute;
    top: 10px;
    right: 20px;
    color: ${({ theme }) => theme.textPrimary};
  }
`;

export const Image = styled(Box).attrs({ component: 'img' })`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

export const Title = styled(Typography).attrs({ component: 'h3' })`
  &.MuiTypography-root {
    font-size: 28px;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};
    margin: 8px 6px 0;
  }

  @media only screen and (max-width: 600px) {
    &.MuiTypography-root {
      font-size: 24px;
      margin: 6px 6px 0;
    }
  }
`;

export const Date = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
    margin: 2px 6px;
    font-weight: 400;
    color: ${({ theme }) => theme.textSecondary};
  }

  @media only screen and (max-width: 768px) {
    &.MuiTypography-root {
      font-size: 12px;
    }
  }
`;

export const Tags = styled(Stack)`
  margin: 8px 0;

  @media only screen and (max-width: 600px) {
    margin: 4px 0;
  }
`;

export const Tag = styled(Chip)`
  &.MuiChip-root {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    margin: 4px;
    padding: 4px 8px;
    border-radius: 8px;
    background-color: ${({ theme }) => `${theme.primary}20`};
  }

  @media only screen and (max-width: 600px) {
    &.MuiChip-root {
      font-size: 12px;
    }
  }
`;

export const Description = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
    font-weight: 400;
    color: ${({ theme }) => theme.textPrimary};
    margin: 8px 6px;
  }

  @media only screen and (max-width: 600px) {
    &.MuiTypography-root {
      font-size: 14px;
      margin: 6px;
    }
  }
`;

export const Label = styled(Typography)`
  &.MuiTypography-root {
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.textPrimary};
    margin: 8px 6px;
  }

  @media only screen and (max-width: 600px) {
    &.MuiTypography-root {
      font-size: 16px;
      margin: 8px 6px;
    }
  }
`;

export const Members = styled(Stack)`
  margin: 12px 6px;

  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

export const Member = styled(Stack)`
  align-items: center;
  gap: 12px;
`;

export const MemberImage = styled(Avatar)`
  &.MuiAvatar-root {
    width: 50px;
    height: 50px;
    margin-bottom: 4px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
  }

  @media only screen and (max-width: 600px) {
    &.MuiAvatar-root {
      width: 32px;
      height: 32px;
    }
  }
`;

export const MemberName = styled(Typography)`
  &.MuiTypography-root {
    font-size: 16px;
    font-weight: 500;
    width: 200px;
    color: ${({ theme }) => theme.textPrimary};
  }

  @media only screen and (max-width: 600px) {
    &.MuiTypography-root {
      font-size: 14px;
    }
  }
`;

export const ExternalLink = styled(Link)`
  &.MuiLink-root {
    text-decoration: none;
    color: inherit;
  }
`;

export const ButtonGroup = styled(Stack)`
  margin: 12px 0;
`;

export const ActionButton = styled(Button)<{ $dull?: boolean }>`
  &.MuiButton-root {
    width: 100%;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    color: ${({ $dull, theme }) => ($dull ? theme.textSecondary : theme.textPrimary)};
    padding: 12px 16px;
    border-radius: 8px;
    background-color: ${({ $dull, theme }) => ($dull ? theme.bgLight : theme.primary)};
    text-transform: none;
  }

  &.MuiButton-root:hover {
    background-color: ${({ $dull, theme }) => ($dull ? `${theme.bg}99` : `${theme.primary}99`)};
  }

  @media only screen and (max-width: 600px) {
    &.MuiButton-root {
      font-size: 12px;
    }
  }
`;
