import styled from 'styled-components';
import { gradients } from './styles/theme';

export const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`;

export const AccentWrapper = styled.div`
  background: ${gradients.appAccent};
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`;
