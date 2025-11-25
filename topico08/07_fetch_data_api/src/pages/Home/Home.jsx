import "./home.css"
import { useState, useEffect } from "react"
import { Cards } from "../../components/Cards/Cards";
import { use } from "react";
// import { mockedProducts } from "../../data/mockedProducts";

// mockedProducts.reverse()

const API_URL = import.meta.env.VITE_API_URL;

const Home = () => {
  const [listProdutos, setListProdutos] = useState([])

  useEffect(() => {

    console.log(API_URL);
    // setTimeout(()=>{      
    //   setListProdutos(mockedProducts)
    // },1000);

    //Promise Chain (then().then().catch())
    // fetch(`${API_URL}/produtos`)
    //   .then(response=>response.json())
    //   .then(json=>{
    //     console.log({json})
    //     setListProdutos(json.data)
    //   })
    //   .catch(error=>console.log(error))
    //   .finally(()=>console.log("Exemplo com fetch!!"));

    // Async/Await
    const loadData = async () => {
      try {
        const response = await fetch(`${API_URL}/produtos`);
        const data = await response.json();
        console.log(data)
        setListProdutos(data.data);
      } catch (error) {
        console.error(error)
      } finally {
        console.log("Exemplo com async/await!!")
      }
    }
    loadData()

    // (async ()=>{//IIFE Expressão de Funções Invocadas Imediatamente
    //   try {
    //     const response = await fetch(`${API_URL}/produtos`);
    //     const data = await response.json();
    //     console.log(data)
    //     setListProdutos(data.data);
    //   } catch (error) {
    //     console.error(error)
    //   } finally{
    //       console.log("Exemplo com async/await com IIFE!!")
    //   }     
    // })();

  }, []) //Final do useEffect
  
  return (
    <div>
      <div className="home">
        <div className="products_grid_container">
          {!listProdutos?.length
            ? <p>Carregando...</p>
            : listProdutos.map((product, key) => (
              <Cards key={`card${key}`} item={product} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
