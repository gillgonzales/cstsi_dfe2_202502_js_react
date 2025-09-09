import "./navbar.css"
// import appLogoSVG from "../../assets/appLogo.svg"
import urlPublicAssetLogo from "/img/appLogo.svg?url"

const NavBar = () => {
    return <>
        <nav className="nav_container">
            <div className="nav_logo">
                <a href="#">
                    {/* <img src="/src/assets/appLogo.svg" className="nav_logo_img"/> */}
                    {/* <img src={appLogoSVG} className="nav_logo_img"/> */}
                    {/* <img src="/img/appLogo.svg" className="nav_logo_img"/> */}
                    <img src={urlPublicAssetLogo} className="nav_logo_img"/>
                </a>
            </div>
            <div className="nav_links">
                <a href="#">Dashboard</a>
                <a  href="#">Log in</a>
                <a href="#">Sign Up</a>
            </div>
        </nav>
    </>
}

export default NavBar
