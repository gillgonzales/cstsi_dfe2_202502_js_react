/* eslint-disable react/prop-types */
import { createContext, useState,useEffect } from 'react'
import { mockDataProducts } from '../mocks/mockData';
mockDataProducts.reverse()

const API_URL = import.meta.env.VITE_API_BASE_URL;

export const ProdutosContext = createContext(undefined)

const ProdutosProvider = ({ children }) => {

    const [data,setData] = useState(null);

    const contextValue = {
        get:()=>data,
        set:(data)=>setData(data),
        update: (id,data)=>editProduto(id,data),
        remove: (id)=>deleteProduto(id)
    }

    const loadProdutos = ()=>{
        fetch(API_URL+'produtos?per_page=1000')
        .then((response)=>{
            if(response.status==200)
                return response.json().then( (data)=> {
                   console.log(data)
                   contextValue.set(data.data.reverse())
                  });   
        })
    }

    const loadProdutosMock = ()=>{
        setTimeout(() => {
            contextValue.set(mockDataProducts)
        }, 1000);
    }


    const editProduto = (id,data)=>{
        return true;//TODO
    }

    const deleteProduto = (id)=>{
        return true;//TODO
    }
    
    useEffect(() => {
        console.log(API_URL)
        // loadProdutosMock()
        loadProdutos();
      }, []);
    

    return (
        <ProdutosContext.Provider value={contextValue}>
            {children}
        </ProdutosContext.Provider>
    )
}

export default ProdutosProvider
