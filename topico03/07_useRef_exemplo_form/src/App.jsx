import { useState } from 'react';
import './App.css';
import CardImc from './components/CardImc/CardImcFit';
import FormCadastraPessoa from './components/FormCadastraPessoaState';

function App() {

  const [pessoa, setPessoa] = useState(null)

  return (
    <>
      <FormCadastraPessoa setPessoa={setPessoa} disabledButton={pessoa}/>
      {/* {!pessoa && <button onClick={cadastraPessoa}>Cadastrar</button>} */}
     {pessoa
        ? <><hr/><CardImc key="p3" pessoa={pessoa} /></>
        : <p>Cadastre uma Pessoa</p>
      }
    </>
  );
}

export default App;
