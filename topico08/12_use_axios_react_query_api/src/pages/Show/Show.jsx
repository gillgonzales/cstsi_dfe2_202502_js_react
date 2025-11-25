
import { Link, useNavigate, useParams } from "react-router";
import { Cards } from "../../components/products/Cards";
import { useProdutosDataById } from "../../hooks/useProdutosData";
import "./show.css";

const Show = () => {

    const { id } = useParams()
    const navigate = useNavigate();
    console.log("id", Number(id))

    const { data, isLoading, isError, isFetching } = useProdutosDataById(id);

    if (isError) navigate('/');
    if (isLoading) return <p>Carregando...</p>;
    if (isFetching) console.log(data)

    return (
        <div className='w-full h-1/2'>
            <div className="show__container">
                {!isFetching && <Cards key={`card${id}`} item={data}/>}
            </div>
            <hr />
            <Link to="/">Voltar</Link>
        </div>
    );
};

export default Show;
