import styled from 'styled-components';
import { media, radii, spacing } from '../../styles/theme';
import { MobileMenuProps, NavigationLinkProps, ThemeOptionButtonProps } from './types';

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

export const NavLogo = styled.div`
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

export const BrandWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const Brand = styled.span`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
`;

export const Span = styled.span`
  padding: 0 4px;
  font-weight: 700;
  font-size: 18px;
`;

export const ThemeMenu = styled.div`
  position: absolute;
  top: calc(100% + 12px);
  left: 0;
  min-width: 150px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 10px;
  border-radius: ${radii.md};
  background: ${({ theme }) => theme.cardLight};
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => `${theme.primary}25`};
  z-index: 20;
`;

export const ThemeMenuTitle = styled.span`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.textSecondary};
  padding: 2px 4px 6px;
`;

export const ThemeOptionButton = styled.button<ThemeOptionButtonProps>`
  width: 100%;
  border: 0;
  border-radius: ${radii.sm};
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  background: ${({ $active, theme }) => ($active ? `${theme.primary}20` : 'transparent')};
  color: ${({ $active, theme }) => ($active ? theme.primary : theme.textPrimary)};
  font-weight: ${({ $active }) => ($active ? 600 : 500)};

  &:hover {
    background: ${({ theme }) => `${theme.primary}14`};
    color: ${({ theme }) => theme.primary};
  }
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

export const MobileGitHubButton = styled(GitHubButton)`
  padding: 10px 16px;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.white};
  width: max-content;
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
