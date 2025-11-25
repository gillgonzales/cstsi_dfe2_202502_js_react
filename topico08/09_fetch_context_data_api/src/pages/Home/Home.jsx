import "./home.css";
import { useEffect, useContext } from "react";
import { Cards } from "../../components/Cards/Cards";
import { ProdutosContext } from "../../contexts/ProdutosProvider";

const Home = () => {
  const { data, isLoaded, loadProdutos } = useContext(ProdutosContext)

  useEffect(() => {
    loadProdutos()
  }, [])

  return (
    <div>
      <div className="home">
        <div className="products_grid_container">
          {isLoaded && data?.length
              ? data.map((product, key) => (
                <Cards key={`card${key}`} item={product} />
              ))
              : <p>Carregando...</p>
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
