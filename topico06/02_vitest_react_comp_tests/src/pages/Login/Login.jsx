import React, { useRef, useState } from 'react'
import { useAuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import "./login.css"

const Login = () => {

  const [erro, setErro] = useState(false)

  const {logIn } = useAuthContext();
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
      if(logIn(payload)) navigate("/");
      throw new Error("Erro ao efetuar login!")
    } catch (error) {
      setErro(true);
      console.error(error);
    }
  };

  return (
   <div className="h-[50vh] flex justify-center items-center ">
      <div className="w-[360px] border-secondary-highlight border-2 max-[400px] p-2 shadow-2xl">
        <form action="" method="get" onSubmit={onSubmit}>
          <h1 className='text-2xl mb-3 text-center text-secondary'> Login</h1>
          <input className="input" ref={emailRef} type="text" placeholder="Email" name="email" />
          <input ref={passwordRef} type="password" placeholder="Password" />
          <button className="btn btn-block">Login</button>
        {erro && (<p className='text-red-400'>
                  Erro ao efetuar o login!!
            </p>)
          }
        </form>
      </div>
    </div>
  )
}

export default Login
