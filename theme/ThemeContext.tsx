import { createContext, useContext, useState } from 'react';
import { Theme, ThemeName, themes } from './themes';

type ThemeContextType = {
  theme: Theme;
  themeName: ThemeName;
  setTheme: (name: ThemeName) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

// ThemeProvider component to wrap the app and provide theme context
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeName, setThemeName] = useState<ThemeName>('light');

  return (
    <ThemeContext.Provider value={{
      theme: themes[themeName],
      themeName,
      setTheme: setThemeName,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider');
  return ctx;
};