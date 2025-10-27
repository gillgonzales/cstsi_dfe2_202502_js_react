import { createContext, useState } from "react";
import { useEffect } from "react";
import { mockDataProducts } from "../mocks/mockData"

mockDataProducts.reverse()

export const ProdutosContext = createContext({
  listProdutos: [],
  produto: {},
  loadProdutos: () => {},
  setListProdutos: () => {},
  findProdutoById: () => { },
  filterProdutos: () => { },
});

const ProdutosProvider = ({ children }) => {
  const [listProdutos, setListProdutos] = useState(null);
  const [produto,setProduto] = useState({});
  const [data, setData] = useState([]);

  const loadProdutos = async () => {
    setTimeout(() => {
            console.log('providers',mockDataProducts)
            setData(mockDataProducts)
          }, 1000);
  };

  const findProdutoById = (id) => {
    console.log(+id)
    const produto =  listProdutos?.find(produto => produto.id === +id)
    setProduto((produto))
    console.log(+id,produto)
    return produto;
  }  

  const filterProdutos = (searchTerm) => {
    console.log("Filtrando Produtos do Contexto!!!")
    const filteredProducts = data?.filter((product) => {
      return product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    })
    setListProdutos(filteredProducts)
  }

  useEffect(() => {
   loadProdutos()
  }, [])
  

  useEffect(() => {
    data.length>0 && setListProdutos(data)
    data.length==1 && setProduto(data)
  }, [data])

  return (
    <ProdutosContext.Provider
      value={{
        listProdutos,
        produto,
        loadProdutos,
        setListProdutos,
        findProdutoById,
        filterProdutos,
      }}
    >
      {children}
    </ProdutosContext.Provider>
  );
};

export default ProdutosProvider;
