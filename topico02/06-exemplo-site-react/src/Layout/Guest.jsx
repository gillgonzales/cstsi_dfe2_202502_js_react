import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import NavBar from "../components/NavBar/NavBar"
import "./main.css"

const Guest = ({ children }) => {
    return (
        <>
            <NavBar />
            <Header />
            <main className="guest_main">
                <div>
                    {children}
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Guest
