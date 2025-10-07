import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.jsx'
import Ola from "./components/Ola/Ola"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<App />} />
        <Route path={"/ola"} element={<Ola/>} />
        <Route path={"/ola/:name"} element={<Ola/>} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
