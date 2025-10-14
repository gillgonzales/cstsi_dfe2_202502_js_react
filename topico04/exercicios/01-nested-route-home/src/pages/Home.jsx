import { Outlet } from "react-router"

const Home = () => {
  return (
      <div>
        Exemplo de rotas aninhadas!
        <hr />
        <Outlet />
      </div>
  )
}

export {Home}