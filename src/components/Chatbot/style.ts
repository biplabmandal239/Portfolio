import styled, { css, keyframes } from 'styled-components';
import { gradients, media, radii, sharedShadows, spacing } from '../../styles/theme';

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px) scale(0.98);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

const pulse = keyframes`
  0%,
  100% {
    transform: scale(0.85);
    opacity: 0.5;
  }

  50% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const FloatingButton = styled.button`
  position: fixed;
  right: 28px;
  bottom: 28px;
  width: 64px;
  height: 64px;
  border: 0;
  border-radius: 50%;
  background: ${gradients.primary};
  color: ${({ theme }) => theme.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 18px 40px rgba(133, 76, 230, 0.35);
  cursor: pointer;
  z-index: 1100;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(133, 76, 230, 0.45);
  }

  ${media.mobile} {
    right: 18px;
    bottom: 18px;
    width: 58px;
    height: 58px;
  }
`;

export const Window = styled.section`
  position: fixed;
  right: 28px;
  bottom: 106px;
  width: min(380px, calc(100vw - 32px));
  height: min(640px, calc(100vh - 140px));
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => `${theme.primary}30`};
  background: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.cardLight} 0%, ${theme.card} 100%)`};
  box-shadow: ${sharedShadows.elevated};
  z-index: 1100;
  animation: ${fadeUp} 0.25s ease;

  ${media.mobile} {
    right: 16px;
    bottom: 88px;
    width: calc(100vw - 32px);
    height: min(560px, calc(100vh - 120px));
  }
`;

export const Header = styled.div`
  background: ${gradients.primary};
  color: ${({ theme }) => theme.white};
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: ${spacing.lg};
  padding: 18px 18px 16px;
`;

export const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const HeaderTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

export const HeaderSubtitle = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.88);
`;

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconButton = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 0;
  background: rgba(255, 255, 255, 0.16);
  color: ${({ theme }) => theme.white};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  padding: 0;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.24);
    transform: translateY(-1px);
  }

  & > svg {
    display: block;
  }
`;

export const Messages = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 18px;
  overflow-y: auto;
`;

export const MessageRow = styled.div<{ $role: 'user' | 'assistant' }>`
  display: flex;
  justify-content: ${({ $role }) => ($role === 'user' ? 'flex-end' : 'flex-start')};
`;

export const MessageBubble = styled.article<{ $role: 'user' | 'assistant' }>`
  max-width: 85%;
  padding: 12px 14px;
  border-radius: 18px;
  white-space: pre-wrap;
  line-height: 1.6;
  font-size: 14px;
  color: ${({ theme, $role }) => ($role === 'user' ? theme.white : theme.textPrimary)};
  background: ${({ theme, $role }) =>
    $role === 'user'
      ? gradients.primary
      : `linear-gradient(180deg, ${theme.bgLight} 0%, ${theme.cardLight} 100%)`};
  border: 1px solid ${({ theme, $role }) => ($role === 'user' ? 'transparent' : `${theme.primary}22`)};
  box-shadow: ${({ $role }) =>
    $role === 'user' ? '0 10px 24px rgba(133, 76, 230, 0.24)' : sharedShadows.soft};
`;

export const MessageTime = styled.time<{ $role: 'user' | 'assistant' }>`
  display: block;
  margin-top: 8px;
  font-size: 11px;
  color: ${({ theme, $role }) =>
    $role === 'user' ? 'rgba(255, 255, 255, 0.76)' : theme.textSecondary};
`;

export const ResumeDownloadLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 12px;
  text-decoration: none;
  padding: 10px 14px;
  border-radius: ${radii.pill};
  background: ${({ theme }) => `${theme.primary}18`};
  color: ${({ theme }) => theme.primary};
  border: 1px solid ${({ theme }) => `${theme.primary}33`};
  font-size: 13px;
  font-weight: 600;
`;

export const TypingBubble = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 12px 14px;
  border-radius: 18px;
  background: ${({ theme }) => theme.bgLight};
  border: 1px solid ${({ theme }) => `${theme.primary}22`};
`;

export const TypingDot = styled.span<{ $delay: string }>`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  animation: ${pulse} 1.1s infinite ease-in-out;
  animation-delay: ${({ $delay }) => $delay};
`;

export const Composer = styled.form`
  padding: 16px 18px 18px;
  border-top: 1px solid ${({ theme }) => `${theme.primary}1A`};
  background: ${({ theme }) => `${theme.card}F5`};
`;

export const InputShell = styled.div<{ $hasError: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 12px;
  border-radius: 18px;
  border: 1px solid ${({ theme, $hasError }) => ($hasError ? '#ff8e8e' : `${theme.primary}30`)};
  background: ${({ theme }) => theme.bgLight};
`;

export const TextInput = styled.input`
  flex: 1;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme }) => theme.textPrimary};
  font-size: 14px;

  &::placeholder {
    color: ${({ theme }) => theme.textSecondary};
  }
`;

const iconButtonStyles = css`
  width: 42px;
  height: 42px;
  border: 0;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.55;
  }

  &:not(:disabled):hover {
    transform: translateY(-1px);
  }
`;

export const SendButton = styled.button`
  ${iconButtonStyles}
  background: ${gradients.primary};
  color: ${({ theme }) => theme.white};
`;

export const HelperText = styled.p`
  margin: 8px 4px 0;
  min-height: 18px;
  font-size: 12px;
  color: #ff9a9a;
`;
