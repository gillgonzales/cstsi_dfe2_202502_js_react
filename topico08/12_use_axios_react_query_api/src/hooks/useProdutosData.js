import axiosClient from "../utils/axios-client";
import { useQuery } from '@tanstack/react-query'

export const fetchProdutosApi = async () => {
  const response = await axiosClient.get( `/produtos`);
  console.log({ response })
  const { data } = response;
  return data.data;
}

export const fetchProdutoById = async (id) => {
  const url =  `/produtos/${id}`;
  const response = await axiosClient.get(url);
  console.log({ response })
  const { data } = response;
  return data.data;
}

export function useProdutosData() {
  const query = useQuery({
    queryFn: fetchProdutosApi,
    queryKey: ['produtos-data'],
  });
  return query;
}

export function useProdutosDataById(id) {
  const query = useQuery({
    queryFn: ()=>fetchProdutoById(id),
    queryKey: ['produtos-data-id',id],
  });
  return query;
}