import { useState } from 'react';
import './App.css';
import { Home } from './pages/home/Home';

function App() {
  const [count, setCount] = useState(0);
  const [theme] = useState('light');

  return (
    <>
        <Home setCount={setCount} count={count} theme={theme}/>
    </>
  );
}

export default App;
