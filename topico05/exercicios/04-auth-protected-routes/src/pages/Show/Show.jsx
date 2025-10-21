import { useContext, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router";

import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../contexts/ProdutosProvider";

import "./show.css";

const Show = () => {

    const { produto, findProdutoById, setProduto } = useContext(ProdutosContext)
    const { id } = useParams()
    const navigate = useNavigate();

    console.log("id", Number(id))

    useEffect(() => {
        setTimeout(() => {
            !findProdutoById(id) && navigate("/notfound");
        }, 1000);
        return () =>setProduto(null)
    }, []);

    return (
        <div className='show__main_content'>
            <div className="show__container">
                {!produto
                    ? <p>Carregando...</p>
                    : (<>
                        <h1>{produto.nome}</h1>
                        <Cards key={`card${id}`} item={produto} />
                        <p>{produto.descricao}</p>
                    </>)
                }
            </div>
            <Link to="/">Voltar</Link>
        </div>
    );
};

export default Show;
