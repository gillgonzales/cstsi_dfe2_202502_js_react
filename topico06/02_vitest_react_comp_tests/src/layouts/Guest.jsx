
import { Outlet } from "react-router-dom"
import Header from "../components/Header/Header.jsx"
import { Navbar } from "../components/Navbar/Navbar.jsx"
import { Footer } from "../components/Footer/Footer.jsx"

function Guest() {
  return (
    <>
    <Navbar/>
    <Header/>
    <main className='min-h-[80vh] flex w-full justify-center p-3 sm:p-10 '>
       <Outlet/>
    </main>
    <Footer/>
    </>
  )
}

export default Guest