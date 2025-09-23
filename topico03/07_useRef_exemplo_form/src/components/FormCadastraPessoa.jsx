/* eslint-disable react/prop-types */
import { useRef } from 'react'

const FormCadastraPessoa = ({setPessoa, disabledButton}) => {

  const inputNomeRef = useRef(null)
  const inputAltRef = useRef(null)
  const inputPesoRef = useRef(null)


   const cadastraPessoa = () => {
      const nova_pessoa = {
        name: inputNomeRef.current.value,
        peso: Number(inputPesoRef.current.value),
        altura: +inputAltRef.current.value
      }
      console.log(nova_pessoa);
      setPessoa(nova_pessoa)
    }

  return (
    <div>
      <form>
        <label>Nome:</label>
        <input ref={inputNomeRef}
          type='text'
          name='nome'
          placeholder='Nome da Pessoa' />
        <br /><label>Altura:</label>
        <input ref={inputAltRef} type='number' name='alt' step={.1}
          defaultValue={1.7} />
        <br /><label>Peso:</label>
        <input ref={inputPesoRef} type='number' name='peso' step={5}
          defaultValue={70} />
      </form>
       <button onClick={cadastraPessoa} disabled={disabledButton}>Cadastrar</button>
    </div>
  )
}

export default FormCadastraPessoa
