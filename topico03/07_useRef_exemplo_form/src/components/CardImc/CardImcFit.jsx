/* eslint-disable react/prop-types */
import { useEffect, useState,useRef } from 'react';
import './cards.css';

const calcImc = (peso, altura) =>peso / altura ** 2;

export default function CardImc({ pessoa }) {
  const alt = pessoa.altura; //Não será alterado durante as renderizações
  
  //estados podem sofrer alterações durante as renderizações
  //useState retorna um array com o valor do estado e a função para atualizá-lo
  const [peso, setPeso] = useState(pessoa.peso); 
  const [imc, setImc] = useState(calcImc(peso, alt).toFixed(2));
  const [isAtleta, setIsAtleta] = useState(false)
  
  //useRef retorna um objeto mutável que persiste durante o ciclo de vida do componente
  //ele não causa re-renderização quando seu valor é alterado
  //ele é usado para acessar elementos DOM diretamente
  //ou para armazenar valores que não precisam causar re-renderização
  //exemplo: inputEsportesRef.current.checked
  const inputEsportesRef = useRef(null)

  console.log('Ref:',inputEsportesRef?.current);
  
  useEffect(() => {
    console.log('useEffect -> Ref:',inputEsportesRef.current);
    let timer = setTimeout(() => setPeso(peso=>{
      let novoPeso = peso + (!isAtleta?1:-1)
      setImc(calcImc(novoPeso, alt).toFixed(2))
      return novoPeso;
    }), 3000);
    return ()=>clearTimeout(timer) //limpa o timer quando o componente é desmontado ou quando o efeito é re-executado
  }, [peso]);

  useEffect(()=>{
    console.log(`${pessoa.name} ${isAtleta?'começou a':'parou de'} praticar esportes!!!`)
  },[isAtleta])

  const atualizaRotina = () =>{
    console.log(inputEsportesRef.current.checked)
    setIsAtleta(inputEsportesRef.current.checked)
  }

  return (
    <div className={imc > 24.5 ? 'imcCard imcRed' : 'imcCard'}>
      <h1>{pessoa.name}:</h1>
      <p>Altura: {alt} m</p>
      <p>Peso: {peso}</p>
      <p>Imc: {imc}</p>
      <p>{isAtleta?<i>Atleta</i>:<b>Sedentário</b>}</p>
      <p>
        <input 
          type='checkbox' 
          ref={inputEsportesRef}
          onChange={atualizaRotina}
        />
        Pratica esportes!
      </p>
    </div>
  );
}
