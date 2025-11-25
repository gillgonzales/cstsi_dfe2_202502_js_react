
import { Outlet } from "react-router"
import Header from "../components/Header"
import { Navbar } from "../components/Navbar"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function Guest() {
  return (
     <QueryClientProvider client={queryClient}>
      <Navbar/>
      <Header/>
      <main className='flex w-full justify-center p-3 sm:p-10 '>
        <Outlet/>
      </main>
  </QueryClientProvider>
  )
}

export default Guest