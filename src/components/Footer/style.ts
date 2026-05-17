import styled from 'styled-components';
import { media } from '../../styles/theme';
import { NavigationLinkProps } from '../Navbar/types';

export const FooterContainer = styled.div`
  width: 100%;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.textPrimary};
`;

export const Logo = styled.h2`
  margin: 0;
  font-weight: 600;
  font-size: 20px;
  color: ${({ theme }) => theme.primary};
`;

export const Nav = styled.nav`
  width: 100%;
  max-width: 800px;
  margin-top: 0.5rem;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;

  ${media.tablet} {
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    text-align: center;
    font-size: 12px;
  }
`;

export const NavLink = styled.a<NavigationLinkProps>`
  color: ${({ theme, $isActive }) => ($isActive ? theme.primary : theme.textPrimary)};
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }

  ${media.tablet} {
    font-size: 1rem;
  }
`;

export const SocialMediaIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

export const SocialMediaIcon = styled.a`
  display: inline-block;
  margin: 0 1rem;
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textPrimary};
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

export const Copyright = styled.p`
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.footerText};
  text-align: center;
`;
