
import { Card } from './Card';

const ContainerMain = ({count,setCount}) => {
  return (
    <div className='container__main'>
        <h1>Exemplo da API de Contexto</h1>
        <Card 
            count={count}
            setCount={setCount} />
        <p className={`read-the-docs`}>
            Click on the Vite and React logos to learn more
        </p>
    </div>
  )
}

export default ContainerMain