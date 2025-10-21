import { useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';
import { ThemeProvider } from './context/ThemeProvider';


function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <ThemeProvider>
        <Home setCount={setCount} count={count} />
      </ThemeProvider>
    </>
  );
}

export default App;
