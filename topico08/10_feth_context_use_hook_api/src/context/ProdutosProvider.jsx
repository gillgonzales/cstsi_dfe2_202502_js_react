/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import { fetchProdutosApi } from '../libs/fetchApiData';
import { useContext } from 'react';

export const ProdutosContext = createContext(undefined)

const ProdutosProvider = ({ children }) => {

    const [data, setData] = useState(null);

    const contextValue = {
        loadProdutos: () => loadProdutos(),
        get: () => data,
        set: (data) => setData(data),
        update: (id, data) => editProduto(id, data),
        remove: (id) => deleteProduto(id)
    }

    const loadProdutos = async () => {
        if(data) return data;
        const produtos = await fetchProdutosApi()
        setData(produtos)
        return produtos;
    }

    const editProduto = (id, data) => {
        return true;//TODO
    }

    const deleteProduto = (id) => {
        return true;//TODO
    }


    return (
        <ProdutosContext.Provider value={contextValue}>
            {children}
        </ProdutosContext.Provider>
    )
}

export const useProdutosContext = () => useContext(ProdutosContext);
export default ProdutosProvider;
