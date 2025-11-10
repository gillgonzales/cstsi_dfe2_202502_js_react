
import Header from "../components/Header"
import { Navbar } from "../components/Navbar"
import ProdutosProvider from "../context/ProdutosProvider.jsx"
import Home from "../pages/home"

function Guest() {
  return (
    <>
    <Navbar/>
    <Header/>
    <main className='flex w-full justify-center p-3 sm:p-10 '>
    <ProdutosProvider>
       <Home/>
    </ProdutosProvider> 
    </main>
    </>
  )
}

export default Guest