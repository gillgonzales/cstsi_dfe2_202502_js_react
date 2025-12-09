/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { DefaultLogo, DefaultStyled, LogoutIcon } from "./layouts.styled";
import appLogo from "../assets/appLogo.svg";
import LogoutLogo from "../components/Logos/LogoutLogo";

export default function Dash() {
  const { user, logOut } = useAuthContext();
  console.log({ user });
  const navigate = useNavigate();

  const onLogout = () => {
    logOut()
    navigate("/logout");
  };

  return (
    <DefaultStyled>
        <header>
          <DefaultLogo>
            <Link href="/">
              <img src={appLogo} />
            </Link>
          </DefaultLogo>
          <div>Bem vindo, {user?.name} !</div>
          <LogoutIcon>
            <a href="#" onClick={(onLogout)} >
                <LogoutLogo />
            </a>
          </LogoutIcon>
        </header>
        <main>
          <aside>
            <Link to="/dashboard">Produtos</Link>
            <Link to="/users">Users</Link>
            <Link to="/cadastro">Novo User</Link>
          </aside>
          <section>
            <Outlet />
          </section>
        </main>
    </DefaultStyled>
  );
}
