import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { media, radii, spacing } from '../../styles/theme';
import { MobileMenuProps, NavigationLinkProps } from './types';

export const Nav = styled.header`
  background-color: ${({ theme }) => theme.cardLight};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 ${spacing['2xl']};
  max-width: 1200px;
`;

export const NavLogo = styled(RouterLink)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-decoration: none;

  ${media.mobile} {
    padding: 0;
  }
`;

export const Brand = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;

export const Span = styled.span`
  padding: 0 4px;
  font-weight: 700;
  font-size: 18px;
`;

export const NavItems = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding: 0 6px;

  ${media.tablet} {
    display: none;
  }
`;

export const NavLink = styled.a<NavigationLinkProps>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.primary : theme.textPrimary)};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: ${radii.xl};
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.white};
  }

  ${media.tablet} {
    font-size: 14px;
  }
`;

export const ButtonContainer = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 6px;

  ${media.tablet} {
    display: none;
  }
`;

export const MobileIcon = styled.button`
  display: none;
  background: transparent;
  border: 0;
  padding: 0;

  ${media.tablet} {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.textPrimary};
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${spacing.lg};
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  padding: 12px 40px 24px;
  background: ${({ theme }) => `${theme.cardLight}F5`};
  transition: all 0.6s ease-in-out;
  transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')};
  border-radius: 0 0 ${radii.xl} ${radii.xl};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  z-index: ${({ $isOpen }) => ($isOpen ? 1000 : -1000)};
`;

export const MobileLink = styled.a<NavigationLinkProps>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.primary : theme.textPrimary)};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;
