import { useContext } from 'react';
import reactLogo from '../../assets/react.svg';
import viteLogo from '/vite.svg';
import { ThemeContext } from '../../App';
import { Card } from '../../components/Card';
import { IconLight } from '../../components/icons/IconLight';
import IconDark from '../../components/icons/IconDark';

export function Home({ count, setCount }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);

  return (
    <>
      <main className={theme}>
        <button onClick={() => toggleTheme()}
          className={`${theme === 'dark' ? 'dark' : 'light'} btn-theme`}>
          {theme === 'dark'
            ? <IconLight
              fill={'light'}
              width={48}
              height={48}
            />
            : <IconDark
              width={48}
              height={48}
            />
          }
        </button>
        <section className={theme}>
          <div>
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Exemplo da API de Contexto</h1>
          <Card count={count} setCount={setCount} />
          <p className={`read-the-docs ${theme}`}>
            Click on the Vite and React logos to learn more
          </p>
        </section>
      </main>
    </>
  );
}
