import * as React from 'react';

export interface ThemeContextState {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const initialState: ThemeContextState = {
  theme: 'light',
  toggleTheme: () => {},
};

export const ThemeContext = React.createContext<ThemeContextState>(initialState);