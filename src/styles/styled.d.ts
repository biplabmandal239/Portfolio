import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string;
    bgLight: string;
    primary: string;
    textPrimary: string;
    textSecondary: string;
    card: string;
    cardLight: string;
    button: string;
    white: string;
    black: string;
    overlay: string;
    shadow: string;
    footerText: string;
  }
}
