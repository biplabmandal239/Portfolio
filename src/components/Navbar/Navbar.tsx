import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { DiCssdeck } from 'react-icons/di';
import { Bio } from '../../data/constants';
import { NAVIGATION_SECTIONS, NavigationSectionId } from '../../utils/navigation';
import { scrollToSection } from '../../utils/scrollToSection';
import { useActiveSection } from '../../utils/useActiveSection';
import {
  Brand,
  ButtonContainer,
  GitHubButton,
  MobileIcon,
  MobileLink,
  MobileMenu,
  Nav,
  NavItems,
  NavLink,
  NavLogo,
  NavbarContainer,
  Span
} from './style';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { activeSection, setActiveSection } = useActiveSection();

  const closeMenu = () => setIsOpen(false);

  const handleSectionClick = (sectionId: NavigationSectionId): void => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
    closeMenu();
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to="/">
          <Brand>
            <DiCssdeck size="3rem" />
            <Span>Portfolio</Span>
          </Brand>
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
            <GitHubButton
              href={Bio.github}
              target="_blank"
              rel="noreferrer"
              style={{
                padding: '10px 16px',
                background: '#854CE6',
                color: 'white',
                width: 'max-content'
              }}
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
