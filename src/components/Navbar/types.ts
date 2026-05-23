export interface MobileMenuProps {
  $isOpen: boolean;
}

export interface NavigationLinkProps {
  $isActive?: boolean;
}

export interface ThemeOptionButtonProps {
  $active?: boolean;
}

export interface NavbarProps {
  darkMode: boolean;
  onThemeChange: (isDarkMode: boolean) => void;
}
