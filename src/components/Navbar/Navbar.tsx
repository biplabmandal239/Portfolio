import { useEffect, useRef, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';
import { Bio } from '../../data/constants';
import { NAVIGATION_SECTIONS, NavigationSectionId } from '../../utils/navigation';
import { scrollToSection } from '../../utils/scrollToSection';
import { useActiveSection } from '../../utils/useActiveSection';
import {
  Brand,
  BrandWrapper,
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileGitHubButton,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span,
  ThemeMenu,
  ThemeMenuTitle,
  ThemeOptionButton
} from './style';
import { NavbarProps } from './types';

const Navbar = ({ darkMode, onThemeChange }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection();
  const themeMenuRef = useRef<HTMLDivElement>(null);

  const closeMenu = () => setIsOpen(false);
  const closeThemeMenu = () => setIsThemeMenuOpen(false);

  const handleSectionClick = (sectionId: NavigationSectionId): void => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    closeMenu();
    closeThemeMenu();
  };

  const handleThemeSelect = (isDarkMode: boolean): void => {
    onThemeChange(isDarkMode);
    closeThemeMenu();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (!themeMenuRef.current?.contains(event.target as Node)) {
        closeThemeMenu();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo>
          <BrandWrapper ref={themeMenuRef}>
            <Brand
              onClick={(event) => {
                event.preventDefault();
                setIsThemeMenuOpen((open) => !open);
              }}
            >
              <DiCssdeck size="3rem" />
              <Span>Portfolio</Span>
            </Brand>
            {isThemeMenuOpen && (
              <ThemeMenu>
                <ThemeMenuTitle>Choose Theme</ThemeMenuTitle>
                <ThemeOptionButton
                  type="button"
                  $active={darkMode}
                  onClick={() => handleThemeSelect(true)}
                >
                  Dark
                </ThemeOptionButton>
                <ThemeOptionButton
                  type="button"
                  $active={!darkMode}
                  onClick={() => handleThemeSelect(false)}
                >
                  Light
                </ThemeOptionButton>
              </ThemeMenu>
            )}
          </BrandWrapper>
        </NavLogo>
        <MobileIcon
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsOpen((open) => !open)}
        >
          <FaBars />
        </MobileIcon>
        <NavItems>
          {NAVIGATION_SECTIONS.map((link) => (
            <NavLink
              key={link.sectionId}
              href="/"
              $isActive={activeSection === link.sectionId}
              onClick={(event) => {
                event.preventDefault();
                handleSectionClick(link.sectionId);
              }}
            >
              {link.label}
            </NavLink>
          ))}
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank" rel="noreferrer">
            Github Profile
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu $isOpen={isOpen}>
            {NAVIGATION_SECTIONS.map((link) => (
              <MobileLink
                key={link.sectionId}
                href="/"
                $isActive={activeSection === link.sectionId}
                onClick={(event) => {
                  event.preventDefault();
                  handleSectionClick(link.sectionId);
                }}
              >
                {link.label}
              </MobileLink>
            ))}
            <MobileGitHubButton href={Bio.github} target="_blank" rel="noreferrer">
              Github Profile
            </MobileGitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
