import "./App.css"
import Guest from "./Layout/Guest"
import Home from "./pages/Home"
import { mockedProducts } from "./mocks/mockedProducts" 

mockedProducts.reverse()

export default function App() {
  return <Guest >
    <Home products = {mockedProducts}/>
  </Guest>
}