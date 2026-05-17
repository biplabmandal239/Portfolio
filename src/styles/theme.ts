import { css, DefaultTheme } from 'styled-components';

export const palette = {
  dark: {
    bg: '#1C1C27',
    bgLight: '#1C1E27',
    primary: '#854CE6',
    textPrimary: '#F2F3F4',
    textSecondary: '#B1B2B3',
    card: '#171721',
    cardLight: '#191924',
    button: '#854CE6',
    white: '#FFFFFF',
    black: '#000000',
    overlay: '#000000A7',
    shadow: 'rgba(23, 92, 230, 0.15)',
    footerText: '#626970'
  },
  light: {
    bg: '#FFFFFF',
    bgLight: '#F0F0F0',
    primary: '#BE1ADB',
    textPrimary: '#111111',
    textSecondary: '#48494A',
    card: '#FFFFFF',
    cardLight: '#FFFFFF',
    button: '#5C5B5B',
    white: '#FFFFFF',
    black: '#000000',
    overlay: '#000000A7',
    shadow: 'rgba(23, 92, 230, 0.15)',
    footerText: '#626970'
  }
} as const;

export const breakpoints = {
  mobile: '640px',
  tablet: '768px',
  desktop: '960px',
  wide: '1200px',
  xwide: '1350px'
} as const;

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '32px',
  '4xl': '40px',
  section: '80px'
} as const;

export const radii = {
  sm: '8px',
  md: '12px',
  lg: '16px',
  xl: '20px',
  pill: '999px'
} as const;

export const typography = {
  titleFont: '"Space Grotesk", sans-serif',
  bodyFont: '"Space Grotesk", sans-serif'
} as const;

export const media = {
  mobile: `@media (max-width: ${breakpoints.mobile})`,
  tablet: `@media (max-width: ${breakpoints.tablet})`,
  desktop: `@media (max-width: ${breakpoints.desktop})`
} as const;

export const gradients = {
  primary:
    'linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%)',
  appAccent:
    'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
  projectAccent:
    'linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%)'
} as const;

export const layout = {
  maxContentWidth: '1100px',
  maxSectionWidth: '1350px',
  maxModalWidth: '800px'
} as const;

export const cardBorder = (theme: DefaultTheme, opacity = 'FF'): string =>
  `${theme.primary}${opacity}`;

export const textAlpha = (value: string, alpha: string): string => `${value}${alpha}`;

export const sharedShadows = {
  elevated: '0 0 12px 4px rgba(0, 0, 0, 0.4)',
  elevatedHover: '0 0 50px 4px rgba(0, 0, 0, 0.6)',
  soft: '0 0 10px rgba(0, 0, 0, 0.2)',
  image: '0 0 16px 2px rgba(0, 0, 0, 0.3)'
} as const;

export const interactiveScale = css`
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const darkTheme: DefaultTheme = {
  ...palette.dark
};

export const lightTheme: DefaultTheme = {
  ...palette.light
};
