/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect, useRef } from "react"
import axiosClient from "../utils/axios-client";

const REFRESH_TOKEN_INTERVAL = 1000 * 60 * 1; // 1 minutes
const AuthContext = createContext({
    user: {},
    token: null,
    logout: ()=>{},
    setUser: () => { },
    setToken: () => { },
    verifyLogin: () => { }
})

const verifyUser = async () => {

    try {
        const { data } = await axiosClient.get('/user')
        data && localStorage.setItem('CURRENT_USER', JSON.stringify(data.user));
        return data;
    } catch (error) {
        clearAuthStorages()
        console.error('Token inválido', error);
        return null
    }
}

const verifyToken = () => {
    try {
        return localStorage.getItem('ACCESS_TOKEN')
    } catch (error) {
        console.error('Token inválido', error);
        clearAuthStorages()
        return null
    }
}

const clearAuthStorages = () => {
    localStorage.removeItem('ACCESS_TOKEN');
    localStorage.removeItem('CURRENT_USER');
}

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('CURRENT_USER')))
    const [token, _setToken] = useState(verifyToken())

    const intervalLogin = useRef(null);

    const setToken = (token) => {
        _setToken(token)
        token && localStorage.setItem('ACCESS_TOKEN', token);
        !token && clearAuthStorages();
    }

    const verifyLogin = async () => {
        try {
            const { user, token } = await verifyUser()
            setUser(user)
            setToken(token)
            return (user && token)
        } catch (error) {
            console.error(error)
            setUser(null)
            setToken(null)
            return false;
        }

    }

    useEffect(() => {
        console.log({ user });
        if (!intervalLogin?.current && user && token)
            intervalLogin.current = setInterval(async () => {
                console.log("Verificando login...");
                verifyLogin();
            }, REFRESH_TOKEN_INTERVAL)
        return () => {
            clearInterval(intervalLogin.current);
            intervalLogin.current = null;
        }
    }, [token]);


    const logout = () => {
        setUser(null);
        setToken(null);
        clearAuthStorages();
    }

    return (
        <AuthContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            verifyLogin,
            logout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
