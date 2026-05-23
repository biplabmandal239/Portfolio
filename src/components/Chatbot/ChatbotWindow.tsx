import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { RefObject } from 'react';
import { ChatbotMessage } from '../../types/chatbot';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import {
  Header,
  HeaderActions,
  HeaderContent,
  HeaderSubtitle,
  HeaderTitle,
  IconButton,
  Messages,
  TypingBubble,
  TypingDot,
  Window
} from './style';

interface ChatbotWindowProps {
  cvDownloadPath: string;
  errorMessage: string;
  inputValue: string;
  isLoading: boolean;
  messages: ChatbotMessage[];
  messagesEndRef: RefObject<HTMLDivElement>;
  onChange: (value: string) => void;
  onClose: () => void;
  onSubmit: () => void;
}

const ChatbotWindow = ({
  cvDownloadPath,
  errorMessage,
  inputValue,
  isLoading,
  messages,
  messagesEndRef,
  onChange,
  onClose,
  onSubmit
}: ChatbotWindowProps) => (
  <Window aria-label="Portfolio chatbot">
    <Header>
      <HeaderContent>
        <HeaderTitle>Ask Biplab&apos;s AI Assistant</HeaderTitle>
        <HeaderSubtitle>
          Portfolio-focused answers about experience, skills, projects, education, contact, and
          resume.
        </HeaderSubtitle>
      </HeaderContent>
      <HeaderActions>
        <IconButton type="button" aria-label="Close chatbot" onClick={onClose}>
          <CloseRoundedIcon fontSize="small" />
        </IconButton>
      </HeaderActions>
    </Header>

    <Messages>
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} cvDownloadPath={cvDownloadPath} />
      ))}
      {isLoading && (
        <TypingBubble aria-live="polite" aria-label="AI is typing">
          <TypingDot $delay="0s" />
          <TypingDot $delay="0.16s" />
          <TypingDot $delay="0.32s" />
        </TypingBubble>
      )}
      <div ref={messagesEndRef} />
    </Messages>

    <ChatInput
      value={inputValue}
      errorMessage={errorMessage}
      isLoading={isLoading}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  </Window>
);

export default ChatbotWindow;
