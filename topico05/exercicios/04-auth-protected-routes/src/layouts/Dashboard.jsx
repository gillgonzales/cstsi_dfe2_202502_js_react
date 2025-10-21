
import { Link, Outlet, useNavigate } from 'react-router'
import appLogo from './../assets/appLogo.svg';
import logoutIcon from "../assets/logout.svg";
import { useAuthContext } from '../contexts/AuthProvider';
import "./../styles/dashboard.css"


const DashboardLayout = () => {

    const {setIsLogged} = useAuthContext()
    const navigate = useNavigate();
    
    const onLogout = () => {
        setIsLogged(false)
        navigate("/login");
    };

    return (
        <>
            <header className='dashboard__header'>
                <div className="logo">
                    <Link to="/">
                        <img src={appLogo} />
                    </Link>
                </div>
                {/* </DefaultLogo> */}
                <div>Bem vindo !</div>
                <div className="logout">
                    <a href="#" onClick={onLogout} >
                        <img src={logoutIcon} />
                    </a>
                </div>
            </header>
            <main>
                <aside>
                    <Link to="/dashboard">Admin</Link>
                    <Link to="produtos">Produto</Link>
                    <Link to="users">Users</Link>
                </aside>
                <section>
                   <Outlet />
                </section>
            </main>
        </>
    )
}

export default DashboardLayout