import { useNavigate, Link } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useRef, useState } from "react";
import axiosClient from "../../utils/axios-client";
import { LoginStyled } from "./login.styled";

export default function Login() {
  const { setToken, setUser } = useAuthContext();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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
    try {
      const response = await axiosClient.post("/token/login", payload);
      if (response?.status !== 200) throw new Error(response.data);
      console.log(response);
      const { data } = response;
      console.log({ data });
      alert("Usuário logado");
      setToken(data.token);
      setUser(data.user);
      navigate("/dashboard");
    } catch (error) {
      console.dir({ error });
      console.error(error.response.data.message);
      setIsError(true)
      setErrorMessage(error.response.data.message)
    }
  };

  return (
    <LoginStyled>
      <div className="form">
        <form action="" method="get" onSubmit={onSubmit}>
          <h1> Administrar Site</h1>
          <input ref={emailRef} type="text" placeholder="Email" name="email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
          <p>Não possui conta? <Link to="/signup">Crie sua conta!</Link></p>
          {isError && <p style={{ color: 'red' }}>Erro ao logar!!!</p>}
          {isError && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
      </div>
    </LoginStyled>
  );
}
