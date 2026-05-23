import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Container,
  Description,
  ErrorText,
  FieldGroup,
  SnackbarAlert,
  Title,
  Wrapper
} from './style';
import {
  ContactFieldName,
  ContactFormErrors,
  ContactFormValues,
  ValidationResult
} from './types';

const INITIAL_FORM_VALUES: ContactFormValues = {
  from_email: '',
  from_name: '',
  subject: '',
  message: ''
};

const LETTER_PATTERN = /[A-Za-z]/;
const EMAIL_PATTERN = /^[a-z0-9._%+-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/;

const normalizeText = (value: string): string => value.trim().replace(/\s+/g, ' ');

const validateTextField = (
  value: string,
  emptyMessage: string,
  invalidMessage: string,
  isRequired: boolean
): ValidationResult => {
  const sanitizedValue = normalizeText(value);

  if (!sanitizedValue) {
    return isRequired ? { sanitizedValue, error: emptyMessage } : { sanitizedValue };
  }

  if (!LETTER_PATTERN.test(sanitizedValue)) {
    return {
      sanitizedValue,
      error: invalidMessage
    };
  }

  return { sanitizedValue };
};

const validateEmail = (value: string): ValidationResult => {
  const sanitizedValue = normalizeText(value);

  if (!sanitizedValue) {
    return { sanitizedValue, error: 'Email is required.' };
  }

  if (sanitizedValue !== sanitizedValue.toLowerCase()) {
    return { sanitizedValue, error: 'Email must be in lowercase only.' };
  }

  if (!EMAIL_PATTERN.test(sanitizedValue)) {
    return {
      sanitizedValue,
      error: 'Enter a valid email address like test@example.com.'
    };
  }

  return { sanitizedValue };
};

const validateField = (
  fieldName: ContactFieldName,
  value: string
): ValidationResult => {
  switch (fieldName) {
    case 'from_email':
      return validateEmail(value);
    case 'from_name':
      return validateTextField(
        value,
        'Name is required.',
        'Name must contain alphabetic text.',
        true
      );
    case 'subject':
      return validateTextField(
        value,
        'Subject is required.',
        'Subject must contain alphabetic text.',
        true
      );
    case 'message':
      return validateTextField(
        value,
        '',
        'Message must contain alphabetic text if provided.',
        false
      );
    default:
      return { sanitizedValue: value };
  }
};

const validateForm = (values: ContactFormValues): ContactFormErrors => {
  const fields = Object.keys(values) as ContactFieldName[];

  return fields.reduce<ContactFormErrors>((errors, fieldName) => {
    const result = validateField(fieldName, values[fieldName]);

    if (result.error) {
      errors[fieldName] = result.error;
    }

    return errors;
  }, {});
};

const Contact = () => {
  const fallbackServiceId = 'service_tox7kqs';
  const fallbackTemplateId = 'template_nv7k7mj';
  const fallbackPublicKey = 'SybVGsYS52j2TfLbi';
  const [open, setOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    'Email could not be sent. Please check your EmailJS settings.'
  );
  const [isSending, setIsSending] = useState(false);
  const [formValues, setFormValues] = useState<ContactFormValues>(INITIAL_FORM_VALUES);
  const [formErrors, setFormErrors] = useState<ContactFormErrors>({});

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || fallbackServiceId;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || fallbackTemplateId;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || fallbackPublicKey;
  const recipientEmail =
    process.env.REACT_APP_CONTACT_RECEIVER_EMAIL || 'biplabmandalvip@gmail.com';

  const isFormValid = useMemo(() => {
    const errors = validateForm(formValues);

    return Object.keys(errors).length === 0;
  }, [formValues]);

  const clearStatusMessages = (): void => {
    if (open) {
      setOpen(false);
    }

    if (errorOpen) {
      setErrorOpen(false);
    }
  };

  const handleFieldChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    const fieldName = name as ContactFieldName;

    clearStatusMessages();

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: value
    }));

    const { error } = validateField(fieldName, value);

    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: error
    }));
  };

  const handleFieldBlur = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    const fieldName = name as ContactFieldName;
    const { sanitizedValue, error } = validateField(fieldName, value);

    setFormValues((currentValues) => ({
      ...currentValues,
      [fieldName]: sanitizedValue
    }));

    setFormErrors((currentErrors) => ({
      ...currentErrors,
      [fieldName]: error
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const sanitizedValues = (Object.keys(formValues) as ContactFieldName[]).reduce<ContactFormValues>(
      (values, fieldName) => {
        values[fieldName] = validateField(fieldName, formValues[fieldName]).sanitizedValue;
        return values;
      },
      { ...INITIAL_FORM_VALUES }
    );

    const errors = validateForm(sanitizedValues);

    setFormValues(sanitizedValues);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      setIsSending(true);
      clearStatusMessages();
      await emailjs.send(serviceId, templateId, {
        to_email: recipientEmail,
        from_email: sanitizedValues.from_email,
        from_name: sanitizedValues.from_name,
        subject: sanitizedValues.subject,
        message: sanitizedValues.message
      }, publicKey);
      setOpen(true);
      setFormValues(INITIAL_FORM_VALUES);
      setFormErrors({});
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : 'An unexpected error occurred while sending the email. Please try again later.';

      setErrorMessage(message);
      setErrorOpen(true);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Description>Feel free to reach out to me for any questions or opportunities!</Description>
        <ContactForm onSubmit={handleSubmit} noValidate>
          <ContactTitle>Email Me</ContactTitle>
          <input type="hidden" name="to_email" value={recipientEmail} />
          <FieldGroup>
            <ContactInput
              $hasError={Boolean(formErrors.from_email)}
              placeholder="Your Email"
              name="from_email"
              type="email"
              value={formValues.from_email}
              onChange={handleFieldChange}
              onBlur={handleFieldBlur}
              required
            />
            {formErrors.from_email && <ErrorText>{formErrors.from_email}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <ContactInput
              $hasError={Boolean(formErrors.from_name)}
              placeholder="Your Name"
              name="from_name"
              value={formValues.from_name}
              onChange={handleFieldChange}
              onBlur={handleFieldBlur}
              required
            />
            {formErrors.from_name && <ErrorText>{formErrors.from_name}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <ContactInput
              $hasError={Boolean(formErrors.subject)}
              placeholder="Subject"
              name="subject"
              value={formValues.subject}
              onChange={handleFieldChange}
              onBlur={handleFieldBlur}
              required
            />
            {formErrors.subject && <ErrorText>{formErrors.subject}</ErrorText>}
          </FieldGroup>
          <FieldGroup>
            <ContactInputMessage
              $hasError={Boolean(formErrors.message)}
              placeholder="Message"
              rows={4}
              name="message"
              value={formValues.message}
              onChange={handleFieldChange}
              onBlur={handleFieldBlur}
            />
            {formErrors.message && <ErrorText>{formErrors.message}</ErrorText>}
          </FieldGroup>
          <ContactButton
            type="submit"
            value={isSending ? 'Sending...' : 'Send'}
            disabled={isSending || !isFormValid}
          />
        </ContactForm>
        <Snackbar open={open} autoHideDuration={6000} onClose={() => setOpen(false)}>
          <SnackbarAlert onClose={() => setOpen(false)} severity="success">
            Email sent successfully!
          </SnackbarAlert>
        </Snackbar>
        <Snackbar open={errorOpen} autoHideDuration={6000} onClose={() => setErrorOpen(false)}>
          <SnackbarAlert onClose={() => setErrorOpen(false)} severity="error">
            {errorMessage}
          </SnackbarAlert>
        </Snackbar>
      </Wrapper>
    </Container>
  );
};

export default Contact;
