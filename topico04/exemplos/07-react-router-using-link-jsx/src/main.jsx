import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Link,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router';
import Ola from './components/Ola/Ola.jsx';
import './index.css';
import App from './App.jsx';

//Configuração Equivalente com objetos
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div>
//         Exemplo de rotas aninhadas com Objetos JS!
//         <hr />
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: '/',
//         element: <Link to="/ola">Olá</Link>,
//       },
//       {
//         path: '/ola',
//         element: <Ola />,
//       },
//       {
//         path: '/ola/:name',
//         element: <Ola />,
//       },
//     ],
//   },
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={
        <div>
          Exemplo de rotas aninhadas com Componentes!
          <hr />
          <Outlet />
        </div>
      }
    >
      <Route path="/" element={<Link to="/ola">Olá</Link>} />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Route>
  )
);

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<App/>}
      >
        <Route path="/" element={<Link to="/ola">Olá</Link>} />
        <Route path="ola" element={<Ola />} />
        <Route path="ola/:name" element={<Ola />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <RouterProvider router={router} /> */}
    <AppRoutes />
  </StrictMode>
);
