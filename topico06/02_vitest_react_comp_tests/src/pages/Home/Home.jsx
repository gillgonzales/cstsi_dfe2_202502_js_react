import { useContext } from "react";
import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../context/ProdutosProvider";
import { SearchBar } from "../../components/SearchBar/SearchBar";

const Home = () => {

  const {listProdutos, filterProdutos }  = useContext(ProdutosContext)

  return (
    <div>
      <SearchBar filterFunction={filterProdutos} disabled={!listProdutos?.length}/>
      <div className="w-full 2xl:max-w-screen-xl mt-5">
        <div className="mx-auto grid h-fit min-h-80 gap-x-8 gap-y-5 sm:w-fit sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 2xl:gap-8">
          {!listProdutos?.length
            ? <p>Carregando...</p>
            :listProdutos.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
