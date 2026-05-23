import { EducationItem, ExperienceItem, ProjectItem, SkillCategory } from './portfolio';

export type ChatRole = 'user' | 'assistant';

export interface ChatbotMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: string;
  showResumeDownload?: boolean;
}

export interface ChatbotReply {
  text: string;
  showResumeDownload: boolean;
}

export interface PortfolioChatbotProfile {
  name: string;
  title: string;
  description: string;
  email: string;
  location: string;
  resumeUrl: string;
  cvDownloadPath: string;
  socialLinks: {
    github: string;
    linkedin: string;
    twitter: string;
    facebook: string;
  };
  skills: SkillCategory[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  guidance: {
    portfolioFocusMessage: string;
    greetingMessage: string;
  };
}

export interface GeminiTextPart {
  text: string;
}

export interface GeminiContent {
  role: 'user' | 'model';
  parts: GeminiTextPart[];
}

export interface GeminiCandidate {
  content?: {
    parts?: GeminiTextPart[];
  };
}

export interface GeminiErrorResponse {
  error?: {
    message?: string;
  };
}

export interface GeminiGenerateContentResponse extends GeminiErrorResponse {
  candidates?: GeminiCandidate[];
}
