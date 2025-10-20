
import { Card } from './Card';

const ContainerMain = ({count,setCount, theme}) => {
  return (
    <div className='container__main'>
        <h1>Exemplo da API de Contexto</h1>
        <Card 
            count={count}
            setCount={setCount} 
            theme={theme}/>
        <p className={`read-the-docs ${theme}`}>
            Click on the Vite and React logos to learn more
        </p>
    </div>
  )
}

export default ContainerMain