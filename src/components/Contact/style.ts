import { Alert } from '@mui/material';
import styled, { css } from 'styled-components';
import { SectionContainer, SectionDescription, SectionTitle, SectionWrapper } from '../../styles/section';
import { gradients } from '../../styles/theme';

export const Container = SectionContainer;
export const Wrapper = styled(SectionWrapper)`
  padding: 0 0 80px;
`;
export const Title = SectionTitle;
export const Description = SectionDescription;

export const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: ${({ theme }) => `${theme.shadow} 0px 4px 24px`};
  margin-top: 28px;
  gap: 12px;
`;

export const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

const fieldStyles = css<{ $hasError?: boolean }>`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? '#ff6b6b' : theme.textSecondary)};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 12px;
  padding: 12px 16px;

  &:focus {
    border: 1px solid ${({ theme, $hasError }) => ($hasError ? '#ff6b6b' : theme.primary)};
  }
`;

export const ContactInput = styled.input`
  ${fieldStyles}
`;

export const ContactInputMessage = styled.textarea`
  ${fieldStyles}
`;

export const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${gradients.primary};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`;

export const ErrorText = styled.span`
  font-size: 13px;
  line-height: 1.4;
  color: #ff8e8e;
  padding: 0 4px;
`;

export const SnackbarAlert = styled(Alert)`
  &.MuiAlert-root {
    width: 100%;
  }
`;
