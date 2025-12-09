/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import axiosClient from "../utils/axios-client";

export const FornecedorContext = createContext({
  listFornecedores: null,
  loadFornecedores: () => {},
});

export const FornecedorProvider = ({ children }) => {
  const [listFornecedores, setListFornecedores] = useState(null);

  const loadFornecedores = async () => {
    const url = `/fornecedores`;
    try {
      const {data} = await axiosClient.get(url);
      // const _data = data?.data;
      // console.log({_data});

      if (!data) 
        throw new Error("Erro ao carregar fornecedores");

      setListFornecedores(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FornecedorContext.Provider
      value={{
        listFornecedores,
        loadFornecedores,
      }}
    >
      {children}
    </FornecedorContext.Provider>
  );
};

export const useFornecedorContext = () => useContext(FornecedorContext)
