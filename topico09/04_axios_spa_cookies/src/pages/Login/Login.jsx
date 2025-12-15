import { Link, useNavigate } from "react-router";
import { useAuthContext } from "../../contexts/AuthProvider";
import { useRef, useState } from "react";
import { LoginStyled } from "./login.styled";

export default function Login() {
  const { auth } = useAuthContext();


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
      await auth(payload);
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
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
