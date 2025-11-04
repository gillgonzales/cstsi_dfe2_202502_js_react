/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import {ThemeProvider} from "styled-components"
import Home from "./pages/Home";
import theme from "./styles/themes/default.styled";
import { useContext } from "react";
import { changeContext } from "./context/ChangeThemeProvider";
import { detectThemeChanges } from "./utils/themeWindow";

function App() {
  const [count, setCount] = useState(0);
  const {isThemeLight, changeTheme} = useContext(changeContext)

  useEffect(() => {
    detectThemeChanges(changeTheme);
    console.log(isThemeLight)
  }, []);

  
  return (
    <ThemeProvider theme={isThemeLight?theme.light:theme.dark}>
        <Home 
          count={count} 
          setCount={setCount} 
          />
    </ThemeProvider>
  );
}

export default App;
