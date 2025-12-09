import { RouterProvider } from "react-router";
import ProdutosProvider from "./contexts/ProdutosProvider.jsx";
import router from "./config/routes.jsx";
import { AuthProvider } from "./contexts/AuthProvider.jsx";

function App() {
  return (
    <AuthProvider>
      <ProdutosProvider>
        <RouterProvider router={router} />
      </ProdutosProvider>
    </AuthProvider>
  );
}

export default App;
