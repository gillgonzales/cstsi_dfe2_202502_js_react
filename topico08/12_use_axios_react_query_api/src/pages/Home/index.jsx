import { Cards } from "../../components/products/Cards";
import { useProdutosData } from "../../hooks/useProdutosData";

const ProdutosGrid = ({ produtos }) => {
  console.log(produtos);
  return (
    <div className="mx-auto grid h-fit min-h-80 gap-x-8 gap-y-5 sm:w-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
      {produtos.map((product, i) => (
        <Cards key={`prod_key_${i}`} item={product} />
      ))}
    </div>
  );
}

const Home = () => {
  const { data, isLoading } = useProdutosData()
  return (
    <div>
      <div className="w-full 2xl:max-w-7xl">
          {!isLoading && <>
            <p>Total de Produtos: {data?.length}</p>
            <ProdutosGrid produtos={data} />
          </>}
          {isLoading && <p>Carregando...</p>}
      </div>
    </div>
  );
};

export default Home;
