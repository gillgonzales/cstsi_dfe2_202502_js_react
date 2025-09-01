import { card } from "../components/card";

export function fetchProducts(listProducts){
   return listProducts.reverse().map(product => card(product))
}