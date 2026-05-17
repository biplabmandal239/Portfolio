import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Bio } from '../../data/constants';
import { NAVIGATION_SECTIONS, NavigationSectionId } from '../../utils/navigation';
import { scrollToSection } from '../../utils/scrollToSection';
import { useActiveSection } from '../../utils/useActiveSection';
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
  SocialMediaIcon,
  SocialMediaIcons
} from './style';

const Footer = () => {
  const { activeSection, setActiveSection } = useActiveSection();

  const handleSectionClick = (sectionId: NavigationSectionId): void => {
    setActiveSection(sectionId);
    scrollToSection(sectionId);
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Biplab Mandal</Logo>
        <Nav>
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
        </Nav>
        <SocialMediaIcons>
          <SocialMediaIcon href={Bio.facebook} target="display" rel="noreferrer">
            <FacebookIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.twitter} target="display" rel="noreferrer">
            <TwitterIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.linkedin} target="display" rel="noreferrer">
            <LinkedInIcon />
          </SocialMediaIcon>
          <SocialMediaIcon href={Bio.insta} target="display" rel="noreferrer">
            <InstagramIcon />
          </SocialMediaIcon>
        </SocialMediaIcons>
        <Copyright>© 2026 Biplab Mandal. All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
