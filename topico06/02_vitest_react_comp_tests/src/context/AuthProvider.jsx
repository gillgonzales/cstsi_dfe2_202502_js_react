import { createContext, useState, useContext, useEffect } from "react"

const EMAIL=import.meta.env.VITE_ADMIN_EMAIL
const PASSWORD=import.meta.env.VITE_ADMIN_PASSWORD

const clearAuthStorages = () => {
    console.log('clear')
    console.log('CURRENT_USER')
    localStorage.removeItem('CURRENT_USER')
}

const AuthContext = createContext({
    user: {},
    logIn: () => { },
    logOut: () => { }
})

export const AuthProvider = ({ children }) => {

    const [user, _setUser] = useState(() => localStorage.getItem('CURRENT_USER'))

    const setUser = (user) => {
        user && localStorage.setItem('CURRENT_USER', JSON.stringify(user))
        !user && clearAuthStorages();
        _setUser(user)
    }

    const logIn = ({email,password})=>{
        console.log({email,password})
        console.log({EMAIL,PASSWORD})
        if(email!==EMAIL || password !== PASSWORD )
            return false;
        
        setUser({email,name:"Tester"})
        return true
    }

    const logOut = () => {
        clearAuthStorages()
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            logOut,
            logIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
