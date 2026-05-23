import SmartToyRoundedIcon from '@mui/icons-material/SmartToyRounded';
import { useEffect, useRef, useState } from 'react';
import { chatbotProfile } from '../../data/chatbotProfile';
import { getChatbotReply } from '../../services/geminiChatbot';
import { ChatbotMessage } from '../../types/chatbot';
import ChatbotWindow from './ChatbotWindow';
import { FloatingButton } from './style';

const createMessage = (
  role: ChatbotMessage['role'],
  content: string,
  showResumeDownload = false
): ChatbotMessage => ({
  id: `${role}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
  role,
  content,
  createdAt: new Date().toISOString(),
  showResumeDownload
});

const INITIAL_MESSAGE = createMessage(
  'assistant',
  `${chatbotProfile.guidance.greetingMessage} Ask me anything about the portfolio.`
);
const FALLBACK_ERROR_MESSAGE =
  "I'm mainly here to answer questions about Biplab Mandal's portfolio.";

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatbotMessage[]>([INITIAL_MESSAGE]);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages, isLoading]);

  const handleClose = (): void => {
    setIsOpen(false);
    setErrorMessage('');
  };

  const handleInputChange = (value: string): void => {
    setInputValue(value);

    if (errorMessage && value.trim()) {
      setErrorMessage('');
    }
  };

  const handleSubmit = async (): Promise<void> => {
    const trimmedMessage = inputValue.trim();

    if (!trimmedMessage) {
      setErrorMessage('Please enter a message before sending.');
      return;
    }

    const nextUserMessage = createMessage('user', trimmedMessage);
    const currentMessages = [...messages, nextUserMessage];

    setMessages(currentMessages);
    setInputValue('');
    setErrorMessage('');
    setIsLoading(true);

    try {
      const reply = await getChatbotReply(trimmedMessage, messages, chatbotProfile);

      setMessages((current) => [
        ...current,
        createMessage('assistant', reply.text, reply.showResumeDownload)
      ]);
    } catch (error) {
      const fallbackMessage =
        error instanceof Error
          ? error.message
          : 'Something went wrong while contacting the AI assistant. Please try again.';

      setMessages((current) => [
        ...current,
        createMessage('assistant', `${fallbackMessage} ${FALLBACK_ERROR_MESSAGE}`)
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isOpen && (
        <ChatbotWindow
          cvDownloadPath={chatbotProfile.cvDownloadPath}
          errorMessage={errorMessage}
          inputValue={inputValue}
          isLoading={isLoading}
          messages={messages}
          messagesEndRef={messagesEndRef}
          onChange={handleInputChange}
          onClose={handleClose}
          onSubmit={handleSubmit}
        />
      )}

      {!isOpen && (
        <FloatingButton
          type="button"
          aria-label="Open portfolio chatbot"
          onClick={() => setIsOpen(true)}
        >
          <SmartToyRoundedIcon fontSize="medium" />
        </FloatingButton>
      )}
    </>
  );
};

export default ChatbotWidget;
