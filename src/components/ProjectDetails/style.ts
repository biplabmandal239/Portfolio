import styled, { css } from 'styled-components';
import { Modal } from '@mui/material';
import { ButtonProps } from './types';

export const StyledModal = styled(Modal)``;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.overlay};
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow-y: scroll;
  transition: all 0.5s ease;
`;

export const Wrapper = styled.div`
  max-width: 800px;
  width: 100%;
  border-radius: 16px;
  margin: 50px 12px;
  height: min-content;
  background-color: ${({ theme }) => theme.card};
  color: ${({ theme }) => theme.textPrimary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin: 8px 6px 0;

  @media only screen and (max-width: 600px) {
    font-size: 24px;
    margin: 6px 6px 0;
  }
`;

export const Date = styled.div`
  font-size: 16px;
  margin: 2px 6px;
  font-weight: 400;
  color: ${({ theme }) => theme.textSecondary};

  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Description = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.textPrimary};
  margin: 8px 6px;

  @media only screen and (max-width: 600px) {
    font-size: 14px;
    margin: 6px;
  }
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  border-radius: 12px;
  margin-top: 30px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
`;

export const Label = styled.div`
  font-size: 20px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  margin: 8px 6px;

  @media only screen and (max-width: 600px) {
    font-size: 16px;
    margin: 8px 6px;
  }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 8px 0;

  @media only screen and (max-width: 600px) {
    margin: 4px 0;
  }
`;

export const Tag = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.primary};
  margin: 4px;
  padding: 4px 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => `${theme.primary}20`};

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

export const Members = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-wrap: wrap;
  margin: 12px 6px;

  @media only screen and (max-width: 600px) {
    margin: 4px 6px;
  }
`;

export const Member = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const MemberImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  margin-bottom: 4px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  @media only screen and (max-width: 600px) {
    width: 32px;
    height: 32px;
  }
`;

export const MemberName = styled.div`
  font-size: 16px;
  font-weight: 500;
  width: 200px;
  color: ${({ theme }) => theme.textPrimary};

  @media only screen and (max-width: 600px) {
    font-size: 14px;
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 12px 0;
  gap: 12px;
`;

export const Button = styled.a<ButtonProps>`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: ${({ theme }) => theme.textPrimary};
  padding: 12px 16px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.primary};
  cursor: pointer;
  text-decoration: none;
  transition: all 0.5s ease;

  ${({ $dull, theme }) =>
    $dull &&
    css`
      background-color: ${theme.bgLight};
      color: ${theme.textSecondary};
    `}

  &:hover {
    background-color: ${({ $dull, theme }) => ($dull ? `${theme.bg}99` : `${theme.primary}99`)};
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;
