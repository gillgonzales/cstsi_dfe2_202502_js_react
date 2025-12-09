import { RouterProvider } from "react-router-dom";
import ProdutosProvider from "./contexts/ProdutosProvider.jsx";
import router from "./config/routes";
import { AuthProvider } from "./contexts/AuthProvider.jsx";
import { FornecedorProvider } from "./contexts/FornecedorProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <FornecedorProvider>
        <ProdutosProvider>
          <RouterProvider router={router} />
        </ProdutosProvider>
      </FornecedorProvider>
    </AuthProvider>
  );
}

export default App;
