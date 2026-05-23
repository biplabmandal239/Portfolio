import { Bio, education, experiences, projects, skills } from './constants';
import { PortfolioChatbotProfile } from '../types/chatbot';

export const chatbotProfile: PortfolioChatbotProfile = {
  name: Bio.name,
  title: 'React.js Frontend Developer',
  description: Bio.description,
  email: 'biplabmandalvip@gmail.com',
  location: 'India',
  resumeUrl: Bio.resume,
  cvDownloadPath: '/assets/Biplab-Mandal-CV.pdf',
  socialLinks: {
    github: Bio.github,
    linkedin: Bio.linkedin,
    twitter: Bio.twitter,
    facebook: Bio.facebook
  },
  skills,
  experiences,
  education,
  projects,
  guidance: {
    portfolioFocusMessage:
      'I am mainly designed to answer questions about Biplab Mandal, his portfolio, projects, skills, education, work experience, and contact details.',
    greetingMessage:
      'Hi! I can help you learn about Biplab Mandal, his skills, projects, education, work experience, and resume.'
  }
};
