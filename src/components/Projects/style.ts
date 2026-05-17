import styled from 'styled-components';
import { SectionDescription, SectionTitle, SectionWrapper } from '../../styles/section';
import { gradients } from '../../styles/theme';
import { ToggleButtonProps } from './types';

export const Container = styled.section`
  background: ${gradients.projectAccent};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 100% 98%, 0 100%);
`;

export const Wrapper = styled(SectionWrapper)`
  padding: 10px 0 100px;
`;

export const Title = SectionTitle;
export const Description = SectionDescription;

export const ToggleButtonGroup = styled.div`
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

export const ToggleButton = styled.button<ToggleButtonProps>`
  padding: 8px 18px;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
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

export const Divider = styled.div`
  width: 1.5px;
  background: ${({ theme }) => theme.primary};
`;

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`;
