import { useEffect, useState } from 'react';
import { NAVBAR_OFFSET, NAVIGATION_SECTIONS, NavigationSectionId } from './navigation';

const getActiveSection = (): NavigationSectionId => {
  const scrollPosition = window.scrollY + NAVBAR_OFFSET + 120;
  let currentSection: NavigationSectionId = NAVIGATION_SECTIONS[0].sectionId;

  for (const section of NAVIGATION_SECTIONS) {
    const element = document.getElementById(section.sectionId);

    if (!element) {
      continue;
    }

    if (element.offsetTop <= scrollPosition) {
      currentSection = section.sectionId;
    }
  }

  const isNearPageBottom =
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 16;

  if (isNearPageBottom) {
    return NAVIGATION_SECTIONS[NAVIGATION_SECTIONS.length - 1].sectionId;
  }

  return currentSection;
};

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<NavigationSectionId>('about');

  useEffect(() => {
    const handleSectionChange = (): void => {
      setActiveSection(getActiveSection());
    };

    handleSectionChange();
    window.addEventListener('scroll', handleSectionChange, { passive: true });
    window.addEventListener('resize', handleSectionChange);

    return () => {
      window.removeEventListener('scroll', handleSectionChange);
      window.removeEventListener('resize', handleSectionChange);
    };
  }, []);

  return { activeSection, setActiveSection };
};
