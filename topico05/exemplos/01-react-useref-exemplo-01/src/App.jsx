import { useRef, useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(1);
  const countNormal = {value:0};
  
  // countRef.current = countRef.current + 1; 
  countNormal.value+=1;
  console.log({ ref: countRef.current, countNormal:countNormal.value});
  return (
    <>
      <h1>Exemplo useRef 1</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          pressionar {count} (useState)
        </button>

        <button onClick={() => countRef.current = countRef.current + 1}>
          incrementar a referência {countRef.current}(useRef)
        </button>
      </div>
      <p className="read-the-docs">
        Clique no botão e veja no console o valor do coutRef contando a
        quantidade de renderizações.
      </p>
      <p className="read-the-docs">
        <a href="https://react.dev/reference/react/useRef" target="_blank">
          Documentação do useRef
        </a>
      </p>
    </>
  );
}

export default App;
