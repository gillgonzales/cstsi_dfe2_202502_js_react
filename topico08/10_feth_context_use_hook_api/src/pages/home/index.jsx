import { Suspense, use } from "react";
import { Cards } from "../../components/products/Cards";
import {useProdutosContext } from "../../context/ProdutosProvider";

const ProdutosGrid = ({ produtosPromise }) => {
  const produtos = use(produtosPromise);
  return (
    <div className="mx-auto grid h-fit min-h-80 gap-x-8 gap-y-5 sm:w-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
      {produtos.map((product, i) => (
        <Cards key={`prod_key_${i}`} item={product} />
      ))}
    </div>
  );
}

const Home = () => {
  const { loadProdutos, get } = useProdutosContext()
  return (
    <div>
      <div className="w-full 2xl:max-w-screen-xl">
        <Suspense fallback={<p>Carregando...</p>}>
          <p>Total de Produtos: {get()?.length}</p>
          <ProdutosGrid produtosPromise={loadProdutos()} />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
