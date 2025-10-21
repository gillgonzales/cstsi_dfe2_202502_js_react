import "./home.css"
import {useState, useEffect, useContext} from "react"
import { Cards } from "../../components/Cards/Cards";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ProdutosContext } from "../../contexts/ProdutosProvider";


const Home = () => {
  const {listProdutos,loadProdutos,filterProdutos} = useContext(ProdutosContext)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    loadProdutos()
    setTimeout(()=>{    
      setIsLoaded(true)
    },1000);
    console.log("isLoaded",isLoaded)//executa uma vez após a montagem, e depois ao atualizar o estado do isLoaded
  }, [isLoaded])//observando a dependência isLoaded


  return (
    <div>
      <SearchBar filterFunction={filterProdutos} disabled={!isLoaded}/>
      <div className="home">
        <div className="products_grid_container">
          {isLoaded && listProdutos.length > 0
            ? listProdutos.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
            :<p>Carregando...</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
