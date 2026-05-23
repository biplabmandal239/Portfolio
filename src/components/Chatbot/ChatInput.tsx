import SendRoundedIcon from '@mui/icons-material/SendRounded';
import { FormEvent, KeyboardEvent } from 'react';
import { Composer, HelperText, InputShell, SendButton, TextInput } from './style';

interface ChatInputProps {
  errorMessage: string;
  isLoading: boolean;
  onChange: (value: string) => void;
  onSubmit: () => void;
  value: string;
}

const ChatInput = ({
  errorMessage,
  isLoading,
  onChange,
  onSubmit,
  value
}: ChatInputProps) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onSubmit();
    }
  };

  return (
    <Composer onSubmit={handleSubmit}>
      <InputShell $hasError={Boolean(errorMessage)}>
        <TextInput
          type="text"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about skills, projects, education, or resume..."
          aria-label="Type your message"
          disabled={isLoading}
        />
        <SendButton type="submit" disabled={isLoading}>
          <SendRoundedIcon fontSize="small" />
        </SendButton>
      </InputShell>
      <HelperText>{errorMessage}</HelperText>
    </Composer>
  );
};

export default ChatInput;
