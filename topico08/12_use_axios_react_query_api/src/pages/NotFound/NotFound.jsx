import { Link } from "react-router";
import "./404.css";

export default function NotFound() {
  return (
    <div className="notfound__container">
      <div className="notfound_panel">
        <h1> Página não Encontrada!!</h1>
        <p>
          Essa rota não existe ou o parâmetro enviado é inválido
        </p>
        <hr />
        <Link to="/"> Página Inicial!!!</Link>
      </div>
    </div>
  );
}