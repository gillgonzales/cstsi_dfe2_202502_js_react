import { Outlet } from "react-router"

const Guest = () => {
  return (
    <div>
        Exemplo de rotas aninhadas!
        <hr />
        <Outlet />
      </div>
  )
}

export {Guest}
