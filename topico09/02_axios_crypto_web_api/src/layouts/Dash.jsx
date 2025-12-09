/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthProvider";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { DefaultLogo, DefaultStyled, LogoutIcon } from "./layouts.styled";
import appLogo from "../assets/appLogo.svg";
import logoutIcon from "../assets/logout.svg";

export default function Dash() {
  const { token, user, verifyLogin, logOut } = useAuthContext();
  const intervalLogin = useRef(null);
  console.log({ token, user });
  const navigate = useNavigate();
  
  useEffect(() => {
    intervalLogin?.current && clearInterval(intervalLogin.current);
    intervalLogin.current = setInterval(async ()=>{
      console.log("Verificando login...");  
       verifyLogin().then( isLogged => !isLogged && navigate("/login"));
    },5000)
    return () => {
      clearInterval(intervalLogin.current);
    }
  }, []);

  if (!token) return <Navigate to="/login" />;

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
            <a href="#" onClick={()=>logOut()} >
                <img src={logoutIcon}/>
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
