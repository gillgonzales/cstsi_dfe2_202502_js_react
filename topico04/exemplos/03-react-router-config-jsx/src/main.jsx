import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Ola from './components/Ola/Ola.jsx';
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.css';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <div>Rota Gerencianda no lado do Cliente com React Router!</div>
        }
      />
      <Route path="ola" element={<Ola />} />
      <Route path="ola/:name" element={<Ola />} />
    </Routes>
  </BrowserRouter>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>
);
