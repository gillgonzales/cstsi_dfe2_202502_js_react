import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Guest from "../layouts/Guest";
import Home from "../pages/Home/Home";
import Show from "../pages/Show/Show";
import Dash from "../layouts/Dash";
import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Users from "../pages/Users/Users";
import Produtos from "../pages/Dashboard/Produtos/Produtos";
import ModalAddProduto from "../pages/Dashboard/Produtos/ModalAddProduto";
import ModalEditProduto from "../pages/Dashboard/Produtos/ModalEditProduto";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Guest />}>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<Show />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="/" element={<PrivateRoute><Dash /></PrivateRoute>}>
        <Route path="dashboard" element={<Produtos />} >
          <Route path="produtos" >
            <Route path="create" element={
              <ModalAddProduto />
            } />
            <Route path="edit/:id" element={
              <ModalEditProduto />
            } />
          </Route>
        </Route>
        <Route path="users" element={<Users />} />
        <Route path="cadastro" element={<Cadastro />} />
      </Route>
    </>
  )
);

export default router;
