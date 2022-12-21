import * as React from 'react';
import ToggleButton from '../components/ToggleButton';
import { ThemeContext, ThemeContextState } from "../context/themeContext";
import SearchBar from '../components/StockProfile';
import StockProfileContextProvider from '../context/StockProfileContextProvider';
import StockProfile from '../components/StockProfile';
import StockQuote from '../components/StockQuote';


const App: React.FC = () => {
  

  const [theme, setTheme] = React.useState<ThemeContextState['theme']>(
    (localStorage.getItem('theme') as ThemeContextState['theme']) || 'light'
  );
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.style.setProperty('--color-primary', '#fff');
      document.documentElement.style.setProperty('--color-secondary', '#333');
      document.documentElement.style.setProperty('--color-background', '#333');
    } else {
      document.documentElement.style.setProperty('--color-primary', '#333');
      document.documentElement.style.setProperty('--color-secondary', '#fff');
      document.documentElement.style.setProperty('--color-background', '#fff');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StockProfileContextProvider>
      <div data-theme={theme}>
        <ToggleButton />
       <StockProfile />
          <StockQuote/>
      </div>
      </StockProfileContextProvider>
    </ThemeContext.Provider>
  );
};

export default App;
