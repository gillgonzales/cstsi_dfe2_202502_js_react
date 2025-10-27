import { useContext, useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../context/ProdutosProvider";
import { Link, useParams } from "react-router-dom";

const Show = () => {
    const { produto, findProdutoById } = useContext(ProdutosContext)
    const { id } = useParams()

    useEffect(() => {
       !produto?.nome && findProdutoById(id)
    }, [produto])

    return (
            <div>
                <div className="mb-10">
                    {!produto?.nome
                        ? <p>Carregando...</p>
                        : <Cards key={`card${id}`} item={produto} />
                    }
                </div>
                <Link to="/" className="btn rounded-2xl" >Voltar</Link>
            </div>
    );
};

export default Show;
