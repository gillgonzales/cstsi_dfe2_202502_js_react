import React from 'react'
import {Outlet} from 'react-router'

const App = () => {
    return (
        <div>
            Exemplo de rotas aninhadas V7!
            <hr />
            <Outlet />
        </div>
    )
}

export default App
