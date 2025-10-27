import './styles/main.css'
import Guest from './layouts/Guest'
import router from './config/routes'
import { RouterProvider } from 'react-router-dom'
import ProdutosProvider from './context/ProdutosProvider'
import { AuthProvider } from './context/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <ProdutosProvider>
        <RouterProvider router={router} />
      </ProdutosProvider>
    </AuthProvider>
  )
}

export default App
