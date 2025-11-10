import { useContext } from "react";
import { Cards } from "../../components/products/Cards";
// import { mockDataProducts } from "../../data/mockData";
import { ProdutosContext } from "../../context/ProdutosProvider";

const Home = () => {

  const produtos = useContext(ProdutosContext)

  return (
    <div>
      <div className="w-full 2xl:max-w-screen-xl">
        <div className="mx-auto grid h-fit min-h-80 gap-x-8 gap-y-5 sm:w-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
          {!produtos?.get()
            ? <p>Carregando...</p>  
            :produtos.get().map((product, i) => (
              <Cards key={product.id*i*Math.ceil(Math.random()*100)} item={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
