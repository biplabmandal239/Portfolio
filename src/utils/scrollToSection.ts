import { NAVBAR_OFFSET } from './navigation';

export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);

  if (!section) {
    return;
  }

  const top = section.getBoundingClientRect().top + window.scrollY - NAVBAR_OFFSET;

  window.history.replaceState(null, '', window.location.pathname + window.location.search);
  window.scrollTo({
    top,
    behavior: 'smooth'
  });
};
