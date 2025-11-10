/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react"

const AuthContext = createContext({
    isAuthenticated: false,
    setIsLogged:()=>{}
})

export const AuthProvider = ({children}) =>{
    const [isAuthenticated, _setIsAuthenticated] = useState(
            JSON.parse(
                    localStorage.getItem('USER_LOGGED')
                )
            )

    const setIsLogged = (login) =>{
        _setIsAuthenticated(login)
        if(!login){
            localStorage.removeItem('USER_LOGGED');
            return;
        }
        localStorage.setItem('USER_LOGGED',true);
        
    }

    return(
        <AuthContext.Provider value={{
            isAuthenticated,
            setIsLogged
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext =() => useContext(AuthContext)
