export const NAVBAR_OFFSET = 80;

export const NAVIGATION_SECTIONS = [
  { sectionId: 'about', label: 'About' },
  { sectionId: 'skills', label: 'Skills' },
  { sectionId: 'experience', label: 'Experience' },
  { sectionId: 'projects', label: 'Projects' },
  { sectionId: 'education', label: 'Education' },
  { sectionId: 'contact', label: 'Contact' }
] as const;

export type NavigationSectionId = (typeof NAVIGATION_SECTIONS)[number]['sectionId'];
