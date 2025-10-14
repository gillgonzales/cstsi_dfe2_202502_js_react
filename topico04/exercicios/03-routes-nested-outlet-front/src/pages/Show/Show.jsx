import { useEffect, useState } from "react"
import { Cards } from "../../components/Cards/Cards";
import { Link, useNavigate, useParams } from "react-router";
import { mockedProducts } from "../../mocks/mockedProducts";
import "./show.css";

const Show = () => {

    const [data, setData] = useState({})
    const { id } = useParams()
    const navigate = useNavigate();


    console.log("id", Number(id),id,+id)

    useEffect(() => {
        setTimeout(() => {
            let [produto] = mockedProducts.filter(produto => produto.id === +id);
            // !produto && navigate('/notfound')
            if(!produto) 
                navigate('/notfound')
            setData(produto)
        }, 1000)
    }, []);

    return (
        <div className='show__main_content'>
            <div className="show__container">
                {data.nome
                    ? (<>
                        <h1>{data.nome}</h1>
                        <Cards key={`card${id}`} item={data} />
                        <p>{data.descricao}</p>
                    </>)
                    : <p>Carregando...</p>
                }
            </div>
            <Link to="/">Voltar</Link>
        </div>
    );
};

export default Show;
