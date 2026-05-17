export interface ContactFormValues {
  from_email: string;
  from_name: string;
  subject: string;
  message: string;
}

export type ContactFieldName = keyof ContactFormValues;

export type ContactFormErrors = Partial<Record<ContactFieldName, string>>;

export interface ContactFieldConfig {
  name: ContactFieldName;
  value: string;
  error?: string;
}

export interface ValidationResult {
  sanitizedValue: string;
  error?: string;
}
