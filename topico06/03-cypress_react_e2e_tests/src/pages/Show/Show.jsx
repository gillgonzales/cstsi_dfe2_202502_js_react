import { useContext, useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../context/ProdutosProvider";
import { Link, useParams } from "react-router-dom";

const Show = () => {
    const { produto, listProdutos, findProdutoById } = useContext(ProdutosContext)
    const { id } = useParams()


    useEffect(()=>{
         findProdutoById(id);
    },[listProdutos])

    return (
            <div>
                <div className="mb-10">
                    {!produto?.nome
                        ? <p>Carregando...</p>
                        : <Cards key={`card${id}`} item={produto} />
                    }
                </div>
                <Link data-test='botao_voltar' to="/" className="btn rounded-2xl" >Voltar</Link>
            </div>
    );
};

export default Show;
