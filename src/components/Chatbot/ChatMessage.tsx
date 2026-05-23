import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { ChatbotMessage } from '../../types/chatbot';
import {
  MessageBubble,
  MessageRow,
  MessageTime,
  ResumeDownloadLink
} from './style';

interface ChatMessageProps {
  cvDownloadPath: string;
  message: ChatbotMessage;
}

const formatMessageTime = (value: string): string =>
  new Date(value).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit'
  });

const ChatMessage = ({ cvDownloadPath, message }: ChatMessageProps) => (
  <MessageRow $role={message.role}>
    <MessageBubble $role={message.role}>
      {message.content}
      {message.showResumeDownload && message.role === 'assistant' && (
        <ResumeDownloadLink href={cvDownloadPath} download="Biplab-Mandal-CV.pdf">
          <DownloadRoundedIcon fontSize="small" />
          Download CV
        </ResumeDownloadLink>
      )}
      <MessageTime $role={message.role}>{formatMessageTime(message.createdAt)}</MessageTime>
    </MessageBubble>
  </MessageRow>
);

export default ChatMessage;
