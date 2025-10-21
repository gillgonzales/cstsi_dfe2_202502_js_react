import { Link, useNavigate } from "react-router";
import { useRef, useState } from "react";
import "./signup.css";

export function SignUp() {
  const [disableButton, setDisableButton] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [password, setPassword] = useState("");
  const inputPassword = useRef(null);
  const confirmPassword = useRef(null);
  const navigate = useNavigate();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleName = (event) => {
    handleEnableButton();
    setName(event.target.value);
  };

  const handleEmail = (event) => {
    handleEnableButton();
    setEmail(event.target.value);
    setEmailInvalid(!emailPattern.test(event.target.value));
  };

  const handlePassword = (event) => {
    handleEnableButton();
    setPassword(event.target.value);
  };

  const handleEnableButton = () => {
    if (name !== "" && email !== "" && password !== "")
      setDisableButton(
        !(confirmPassword.current.value === inputPassword.current.value)
      );
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      name: name,
      email: email,
      password: password,
      password_confirmation: confirmPassword.current.value,
    };
    console.log({ payload });
    alert("Conta Crida!! Verifique seu email para ativar sua conta.");
    navigate("/");
  };

  return (
    <div className="signup__container">
      <div className="form">
      <form action="" method="get" onSubmit={onSubmit}>
      <h1 className="title">Novo Usuário</h1>
      <input
        type="text"
        placeholder="Nome de Login"
        name="name"
        onChange={handleName}
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        onChange={handleEmail}
      />
      {emailInvalid && <pre>{`Campo Email é inválido!!!`}</pre>}
      <input
        type="password"
        placeholder="Senha"
        onChange={handlePassword}
        ref={inputPassword}
        name="password"
      />
      <input
        type="password"
        placeholder="Confirmar a senha"
        name="password_confirm"
        ref={confirmPassword}
        onChange={handleEnableButton}
      />
      <button
        className={disableButton ? "btn-disabled btn-block" : "btn btn-block"}
        disabled={disableButton ? "disabled" : ""}
      >
        Cadastrar
      </button>
      <p className="message">
          Já tem conta? <Link to="/login">Faça o login!</Link>
      </p>
    </form>
      </div>
    </div>
  );
}
