import {
  ChatbotMessage,
  ChatbotReply,
  GeminiContent,
  GeminiGenerateContentResponse,
  PortfolioChatbotProfile
} from '../types/chatbot';

const GEMINI_MODEL = 'gemini-2.0-flash';
const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;
const MAX_HISTORY_MESSAGES = 8;

const CV_REQUEST_PATTERN =
  /\b(cv|resume|curriculum vitae)\b|download\s+(?:the\s+|my\s+)?(?:cv|resume)/i;
const EMAIL_PATTERN = /\b(email|mail|gmail|contact)\b/;
const LINKEDIN_PATTERN = /\blinkedin\b/;
const GITHUB_PATTERN = /\bgithub\b/;
const LOCATION_PATTERN = /\b(location|based|from|country|city|where)\b/;
const PRIVATE_ADDRESS_PATTERN =
  /\b(home address|address|house address|full address|residential address|where does .* live|where do .* live)\b/;
const SKILLS_PATTERN = /\b(skill|skills|tech stack|technology|technologies|frontend|backend)\b/;
const EXPERIENCE_PATTERN = /\b(experience|work|job|company|companies|career)\b/;
const EDUCATION_PATTERN = /\b(education|study|studies|degree|college|university|mca|bca)\b/;
const PROJECT_PATTERN = /\b(project|projects|portfolio work|built|build)\b/;
const ABOUT_PATTERN = /\b(about|who is|who are you|introduce|summary|bio)\b/;
const GREETING_PATTERN = /^(hi|hello|hey|good morning|good afternoon|good evening)\b/;
const TODAY_PATTERN = /(today'?s date|current date|what date is it)/;
const MONTH_PATTERN = /(current month|what month|which month)/;
const YEAR_PATTERN = /(current year|what year|which year)/;
const THANKS_PATTERN = /(thank you|thanks)\b/;

type DateContext = {
  fullDate: string;
  month: string;
  year: string;
};

type LocalReplyResolver = (
  message: string,
  profile: PortfolioChatbotProfile,
  dateContext: DateContext
) => ChatbotReply | null;

const buildCurrentDateContext = (): DateContext => {
  const now = new Date();

  return {
    fullDate: now.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    month: now.toLocaleDateString('en-US', { month: 'long' }),
    year: now.toLocaleDateString('en-US', { year: 'numeric' })
  };
};

const createReply = (text: string, showResumeDownload = false): ChatbotReply => ({
  text,
  showResumeDownload
});

const escapePromptValue = (value: string): string => value.replace(/\s+/g, ' ').trim();

const formatSkills = (profile: PortfolioChatbotProfile): string =>
  profile.skills
    .map((category) => `${category.title}: ${category.skills.map((skill) => skill.name).join(', ')}`)
    .join(' | ');

const formatEducation = (profile: PortfolioChatbotProfile): string =>
  profile.education
    .map((item) => `${item.degree} from ${item.school} (${item.date}, ${item.grade})`)
    .join(' | ');

const formatFeaturedProjects = (profile: PortfolioChatbotProfile): string =>
  profile.projects
    .slice(0, 4)
    .map((project) => `${project.title} (${project.date})`)
    .join(', ');

const buildProfilePrompt = (profile: PortfolioChatbotProfile): string => {
  const dateContext = buildCurrentDateContext();
  const projectsSummary = profile.projects
    .map(
      (project) =>
        `- ${project.title} (${project.date}): ${project.description}. Tech: ${project.tags.join(', ')}. Link: ${project.webapp || 'Not shared'}`
    )
    .join('\n');
  const experienceSummary = profile.experiences
    .map(
      (experience) =>
        `- ${experience.role} at ${experience.company} (${experience.date}): ${experience.desc}. Skills: ${experience.skills.join(', ')}`
    )
    .join('\n');
  const educationSummary = profile.education
    .map(
      (item) =>
        `- ${item.degree} from ${item.school} (${item.date}), grade ${item.grade}. ${item.desc}`
    )
    .join('\n');

  return `
You are a portfolio chatbot for ${escapePromptValue(profile.name)}.
Primary focus: answer questions about ${escapePromptValue(profile.name)}'s portfolio, work, skills, projects, education, experience, contact details, and resume.

Behavior rules:
- Be concise, friendly, and professional.
- Prefer portfolio-grounded answers over generic answers.
- If asked something unrelated to the portfolio, politely redirect and mention that you are mainly designed to answer questions about ${escapePromptValue(profile.name)}'s portfolio.
- You may answer very basic general questions such as greetings, today's date, current month, and year.
- If portfolio information is missing, say so instead of inventing details.
- Never claim to have backend access, email access, or private information.
- If the user asks for a CV or resume, mention that a download button is available.

Current date context:
- Today: ${dateContext.fullDate}
- Current month: ${dateContext.month}
- Current year: ${dateContext.year}

Portfolio profile:
- Name: ${escapePromptValue(profile.name)}
- Title: ${escapePromptValue(profile.title)}
- Summary: ${escapePromptValue(profile.description)}
- Email: ${escapePromptValue(profile.email)}
- Location: ${escapePromptValue(profile.location)}
- Resume URL: ${escapePromptValue(profile.resumeUrl)}
- GitHub: ${escapePromptValue(profile.socialLinks.github)}
- LinkedIn: ${escapePromptValue(profile.socialLinks.linkedin)}
- Twitter/X: ${escapePromptValue(profile.socialLinks.twitter)}
- Facebook: ${escapePromptValue(profile.socialLinks.facebook)}

Skills:
${formatSkills(profile)}

Experience:
${experienceSummary}

Education:
${educationSummary}

Projects:
${projectsSummary}
  `.trim();
};

const localReplyResolvers: LocalReplyResolver[] = [
  (message, profile) =>
    CV_REQUEST_PATTERN.test(message)
      ? createReply(
          `You can download ${profile.name}'s CV using the button below, or view the existing resume link from the portfolio hero section.`,
          true
        )
      : null,
  (message, profile) =>
    EMAIL_PATTERN.test(message)
      ? createReply(
          `${profile.name}'s contact email is ${profile.email}. You can also use the Contact section on the portfolio to reach out directly.`
        )
      : null,
  (message, profile) =>
    PRIVATE_ADDRESS_PATTERN.test(message)
      ? createReply(
          `I can't share ${profile.name}'s private home address. I can help with public portfolio details like email (${profile.email}), LinkedIn, GitHub, skills, experience, projects, education, and resume instead.`
        )
      : null,
  (message, profile) =>
    LINKEDIN_PATTERN.test(message)
      ? createReply(`${profile.name}'s LinkedIn profile is ${profile.socialLinks.linkedin}.`)
      : null,
  (message, profile) =>
    GITHUB_PATTERN.test(message)
      ? createReply(`${profile.name}'s GitHub profile is ${profile.socialLinks.github}.`)
      : null,
  (message, profile) =>
    LOCATION_PATTERN.test(message) && !PROJECT_PATTERN.test(message)
      ? createReply(`${profile.name} is based in ${profile.location}.`)
      : null,
  (message, profile) =>
    GREETING_PATTERN.test(message)
      ? createReply(
          `${profile.guidance.greetingMessage} Ask me about skills, experience, education, projects, contact details, or the resume.`
        )
      : null,
  (message, _profile, dateContext) =>
    TODAY_PATTERN.test(message) ? createReply(`Today is ${dateContext.fullDate}.`) : null,
  (message, _profile, dateContext) =>
    MONTH_PATTERN.test(message) ? createReply(`The current month is ${dateContext.month}.`) : null,
  (message, _profile, dateContext) =>
    YEAR_PATTERN.test(message) ? createReply(`The current year is ${dateContext.year}.`) : null,
  (message, profile) =>
    THANKS_PATTERN.test(message)
      ? createReply(`You're welcome. ${profile.guidance.portfolioFocusMessage}`)
      : null,
  (message, profile) =>
    ABOUT_PATTERN.test(message)
      ? createReply(`${profile.name} is a ${profile.title}. ${profile.description}`)
      : null,
  (message, profile) =>
    SKILLS_PATTERN.test(message)
      ? createReply(`${profile.name}'s core skills include ${formatSkills(profile)}.`)
      : null,
  (message, profile) => {
    if (!EXPERIENCE_PATTERN.test(message)) {
      return null;
    }

    const [latestExperience] = profile.experiences;

    return latestExperience
      ? createReply(
          `${profile.name} is working as ${latestExperience.role} at ${latestExperience.company} (${latestExperience.date}). ${latestExperience.desc}`
        )
      : null;
  },
  (message, profile) =>
    EDUCATION_PATTERN.test(message)
      ? createReply(`${profile.name}'s education includes ${formatEducation(profile)}.`)
      : null,
  (message, profile) =>
    PROJECT_PATTERN.test(message)
      ? createReply(
          `${profile.name}'s featured projects include ${formatFeaturedProjects(profile)}. Ask about a specific project like AgScout, SSuites, or SimpVault if you'd like more detail.`
        )
      : null
];

const createLocalReply = (
  message: string,
  profile: PortfolioChatbotProfile
): ChatbotReply | null => {
  const normalizedMessage = message.trim().toLowerCase();

  if (!normalizedMessage) {
    return createReply('Please enter a message so I can help.');
  }

  const dateContext = buildCurrentDateContext();

  for (const resolver of localReplyResolvers) {
    const reply = resolver(normalizedMessage, profile, dateContext);

    if (reply) {
      return reply;
    }
  }

  return null;
};

const getApiKey = (): string => import.meta.env.VITE_GEMINI_API_KEY?.trim() ?? '';

const mapMessagesToGeminiContents = (messages: ChatbotMessage[]): GeminiContent[] =>
  messages.slice(-MAX_HISTORY_MESSAGES).map((message) => ({
    role: message.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: message.content }]
  }));

const parseGeminiText = (response: GeminiGenerateContentResponse): string => {
  const text = response.candidates?.[0]?.content?.parts
    ?.map((part) => part.text.trim())
    .filter(Boolean)
    .join('\n')
    .trim();

  if (text) {
    return text;
  }

  if (response.error?.message) {
    throw new Error(response.error.message);
  }

  throw new Error('The AI service returned an empty response.');
};

const normalizeAssistantText = (value: string): string =>
  value.replace(/\n{3,}/g, '\n\n').trim();

const formatGeminiError = (message: string): string => {
  const normalizedMessage = message.toLowerCase();

  if (
    normalizedMessage.includes('quota') ||
    normalizedMessage.includes('billing') ||
    normalizedMessage.includes('rate limit') ||
    normalizedMessage.includes('resource_exhausted')
  ) {
    return "The AI service is temporarily unavailable because the Gemini quota limit has been reached. You can still ask about Biplab Mandal's portfolio details like email, skills, experience, education, projects, and resume.";
  }

  return "I could not get a live AI response right now. You can still ask about Biplab Mandal's portfolio details like email, skills, experience, education, projects, and resume.";
};

export const getChatbotReply = async (
  userMessage: string,
  messages: ChatbotMessage[],
  profile: PortfolioChatbotProfile
): Promise<ChatbotReply> => {
  const localReply = createLocalReply(userMessage, profile);

  if (localReply) {
    return localReply;
  }

  const apiKey = getApiKey();

  if (!apiKey) {
    throw new Error(
      'The chatbot is not configured yet. Add VITE_GEMINI_API_KEY to your .env file to enable Gemini responses.'
    );
  }

  const response = await fetch(`${GEMINI_API_URL}?key=${encodeURIComponent(apiKey)}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      systemInstruction: {
        parts: [{ text: buildProfilePrompt(profile) }]
      },
      contents: mapMessagesToGeminiContents([
        ...messages,
        {
          id: 'latest-user-message',
          role: 'user',
          content: userMessage,
          createdAt: new Date().toISOString()
        }
      ]),
      generationConfig: {
        temperature: 0.5,
        topP: 0.9,
        maxOutputTokens: 300
      }
    })
  });

  const data = (await response.json()) as GeminiGenerateContentResponse;

  if (!response.ok) {
    throw new Error(formatGeminiError(data.error?.message ?? ''));
  }

  const assistantText = normalizeAssistantText(parseGeminiText(data));

  return createReply(
    assistantText,
    CV_REQUEST_PATTERN.test(userMessage) || CV_REQUEST_PATTERN.test(assistantText)
  );
};
