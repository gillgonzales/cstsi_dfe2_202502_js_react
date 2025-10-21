/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: '',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
   //implemente a lógica para alternar entre os temas light e dark
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    //altere o provider para incluir o toggleTheme
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}