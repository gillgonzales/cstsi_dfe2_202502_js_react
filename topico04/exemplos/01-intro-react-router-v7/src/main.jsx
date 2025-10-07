import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/test"} element={
          <div>
            <h1>Router instalado!</h1>
            <Link to="/">Voltar(Link)</Link><hr/>
            <a href="/">Voltar(a)</a>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
