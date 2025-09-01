import { mockedProducts } from "./mocks/mockedProducts";
// import { card } from "./components/card";
import { fetchProducts } from "./utils/importProducts";

// import "./style.css"

const content = fetchProducts(mockedProducts)
const container = document.querySelector(".products_grid_container");

setTimeout(()=>
  container.innerHTML = content.join('')
,1000);