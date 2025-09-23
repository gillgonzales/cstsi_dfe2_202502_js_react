/* eslint-disable react/prop-types */
import { useState } from 'react'

export default function FormCadastraPessoaState({ setPessoa, disabledButton }) {

  const [inputName, setInputName] = useState(null)
  const [inputAltura, setInputAltura] = useState(null)
  const [inputPeso, setInputPeso] = useState(null)


  const cadastraPessoa = () => {
    const nova_pessoa = {
      name: inputName,
      peso: +inputPeso,
      altura: +inputAltura
    }
    console.log(nova_pessoa);
    setPessoa(nova_pessoa)
  }

  console.log('render')

  return (
    <div>
      <form>
        <label>Nome:</label>
        <input
          onChange={(e) => setInputName(e.target.value)}
          type='text'
          name='nome'
          placeholder='Nome da Pessoa' />
        <br /><label>Altura:</label>
        <input
          onChange={(e) => setInputAltura(e.target.value)}
          type='number' name='alt' step={.1}
          defaultValue={1.7} />
        <br /><label>Peso:</label>
        <input
          onChange={(e) => setInputPeso(e.target.value)}
          type='number' name='peso' step={5}
          defaultValue={70} />
      </form>
      <button onClick={cadastraPessoa} disabled={disabledButton}>Cadastrar</button>
    </div>
  )
}
