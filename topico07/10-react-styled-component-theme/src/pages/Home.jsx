/* eslint-disable react/prop-types */
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import cssLogo from "/img/css3.png";
import DevIllustration from "../components/DevIllustration/DevIllustration";
import { Main, HomeStyled } from "./Home.styled";
import { CSS3Logo, Logo, ReactLogo } from "../components/Logo/Logo.styled";
import { Title } from "../components/Title/Title.styled";
import { Button } from "../components/Button/Button.styled";
import { ParagraphDocs } from "../components/ParagraphDocs/ParagraphDocs.styled";
import { useContext } from "react";
import { changeContext } from "../context/ChangeThemeProvider";


const Home = ({ count, setCount }) => {
  
 const {isThemeLight, changeTheme} = useContext(changeContext)
  
  return (
    <HomeStyled>
      <Main>
        <div>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
            target="_blank"
          >
            <CSS3Logo src={cssLogo} />
          </a>
          <a href="https://vite.dev" target="_blank">
            <Logo src={viteLogo} alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <ReactLogo src={reactLogo} alt="React logo" />
          </a>
        </div>
        <Title>Vite + React</Title>
        <div className="card">
          <Button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </Button>
          <Button onClick={changeTheme}>
            Trocar Tema para {isThemeLight?'Dark':'Light'}
          </Button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <ParagraphDocs>
          Click on the Vite and React logos to learn more
        </ParagraphDocs>  
        <DevIllustration />
      </Main>
    </HomeStyled>
  );
};

export default Home;
