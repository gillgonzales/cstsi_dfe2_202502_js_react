import { Link, useNavigate } from "react-router";
import { useRef } from "react";
import "./login.css";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    console.log({ payload });
    alert("Bem Vindo!!")
    navigate("/");
  };

  return (
    <div className="login__container">
      <div className="form">
        <form action="" method="get" onSubmit={onSubmit}>
          <h1> Entre na sua Conta!!!</h1>
          <input ref={emailRef} type="text" placeholder="Email" name="email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p>
            Não tem cadastro? <Link to="/register">Crie uma conta!!</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
