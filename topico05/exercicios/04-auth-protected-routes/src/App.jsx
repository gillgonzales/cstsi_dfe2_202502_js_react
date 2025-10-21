import './styles/main.css'

import ProdutosProvider from './contexts/ProdutosProvider'
import { AuthProvider } from './contexts/AuthProvider'
import ThemeProvider from './contexts/ThemeProvider'
import { AppRoutes } from './routes/AppRoutes'

function App() {
  return <AuthProvider>
          <ProdutosProvider  >
            <ThemeProvider>
              <AppRoutes />
            </ThemeProvider>
          </ProdutosProvider>
        </AuthProvider>
}

export default App
