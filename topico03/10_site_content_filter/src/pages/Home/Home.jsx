import "./home.css"
import { useState, useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { mockedProducts } from "../../data/mockedProducts";
import FilterBar from "../../components/FilterBar/FilterBar";


const Home = () => {

  const [listProdutos, setListProdutos] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true)
    }, 500);
    console.log("isLoaded", isLoaded)//executa uma vez após a montagem, e depois ao atualizar o estado do isLoaded
  }, [isLoaded])//observando a dependência isLoaded


  const filterProducts = (filterTerm) => {
    // console.log('searc<Cards key={`card${key}`} item={product} />hTerm', filterTerm)
    const filteredProducts = mockedProducts.filter(
      (product) => {
        return product.nome.toLowerCase().includes(filterTerm.toLowerCase())
      }
    )
    // console.log('filteredProducts', filteredProducts)
    setListProdutos(filteredProducts.reverse())
  }


  return (
    <div>
      <FilterBar filterFunction={filterProducts} disabled={!isLoaded} />
      <div className="home">
        <div className="products_grid_container">
          {isLoaded && listProdutos.length > 0
            ? listProdutos.map((product, key) => (
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
