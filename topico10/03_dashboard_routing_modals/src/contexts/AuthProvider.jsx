/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect, useRef } from "react"
import axiosClient from "../utils/axios-client";
import { manipulateLocalStorage, } from "../utils/encrypt-storage";
import useAuthStorage from "../hooks/useAuthStorage";


const REFRESH_TOKEN_INTERVAL = 1000 * 60 * 1; // 1 minutes

manipulateLocalStorage()


const AuthContext = createContext({
    user: {},
    token: null,
    setUser: () => { },
    setToken: () => { },
    verifyLogin: () => { },
    logOut: () => { }
})

export const AuthProvider = ({ children }) => {

    const [CURRENT_USER, ACCESS_TOKEN, clearAuthStorages] = useAuthStorage()

    const [user, _setUser] = useState(() => JSON.parse(localStorage.getDecryptedItem(CURRENT_USER)))
    const [token, _setToken] = useState(() => localStorage.getDecryptedItem(ACCESS_TOKEN))

     const intervalLogin = useRef(null);

    const setUser = (user) => {
        user && localStorage.setEncryptedItem(CURRENT_USER, JSON.stringify(user))
        _setUser(user)
    }

    const setToken = (tokenNovo) => {
        console.log({ ACCESS_TOKEN, tokenNovo })
        tokenNovo && localStorage.setEncryptedItem(ACCESS_TOKEN, tokenNovo)
        _setToken(tokenNovo)
    }

    const verifyLogin = async () => {
        try {
            const { token, user } = await refreshToken()
            setUser(user)
            setToken(token)
            return true;
        } catch (error) {
            setToken(null)
            setUser(null)
            console.error(error)
            return false;
        }
    }

    const logOut = () => {
        clearAuthStorages()
        setUser(null)
        setToken(null)
    }

    const refreshToken = async () => {
        try {
            const { data } = await axiosClient.get('/token/refresh')
            if (!data) throw new Error("Erro ao recuperar novo token!"); 7
            console.log({ data })
            return data;
        } catch (error) {
            const { response } = error;
            response?.status === 401 && clearAuthStorages();
            console.error('Error:', error);
            throw error;
        }
    }

    axiosClient.interceptors.request.use((config) => {
        const accessToken = localStorage.getDecryptedItem(ACCESS_TOKEN)
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    });

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

    return (
        <AuthContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            verifyLogin,
            logOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
