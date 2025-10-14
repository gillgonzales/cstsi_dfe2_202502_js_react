import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
  BrowserRouter,
  Routes,
} from 'react-router';
import Ola from './components/Ola/Ola.jsx';
import './index.css';
import { Home } from './pages/Home.jsx';
import { Guest } from './layouts/Guest.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Guest />}
    >
      <Route path="/" element={<Home />} />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Route>
  )
);

//Configuração Equivalente com objetos
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: (
//       <div>
//         Exemplo de rotas aninhadas!
//         <hr />
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: '/',
//         element: <a href="/ola">Olá</a>,
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


export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Guest />}
      >
        <Route path="/" element={<Home />} />
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
