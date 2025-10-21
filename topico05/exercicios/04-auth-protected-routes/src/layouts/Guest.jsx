import "./../styles/guest.css";
import Header from "../components/Header/Header.jsx";
import { Navbar } from "../components/Navbar/Navbar.jsx";
import { Footer } from "../components/Footer/Footer.jsx";
import { Outlet } from "react-router";
import { useTheme } from "../contexts/ThemeProvider.jsx";



function GuestLayout() {

  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <Header />
      {/* <main className='flex w-full justify-center p-3 sm:p-10 '> */}
      <main className={`guest_main ${theme}`}>
         <Outlet/>
      </main>
      <Footer/>
    </>
  );
}

export default GuestLayout;
