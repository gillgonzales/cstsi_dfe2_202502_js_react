import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import cssLogo from "/img/css3.png";
import "./styles/style.css";
import "./App.css";
// import backdroungDevImage from "./assets/imgs/front-end-wallpapers.jpg"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-row h-35">
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Web/CSS"
          target="_blank"
        >
          <img src={cssLogo} className="h-[8em] logo css_logo" alt="CSS logo" />
        </a>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-[8em] logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-[8em] logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div className="
        bg-blue-200
        dark:bg-gray-300
        aspect-1/1 
        w-[50vw] 
        rounded-full
        bg-[url(/img/frontdev.png)]
        bg-cover
        hover:bg-blue-300
        dark:hover:bg-gray-400"
        ></div>
    </>
  );
}

export default App;
