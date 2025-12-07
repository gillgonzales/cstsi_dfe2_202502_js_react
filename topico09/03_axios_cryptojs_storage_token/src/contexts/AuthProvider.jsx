/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from "react"
import axiosClient from "../utils/axios-client";
import { manipulateLocalStorage, } from "../utils/encrypt-storage";
import useAuthStorage from "../hooks/useAuthStorage";

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

    const setUser = (user) => {
        user && localStorage.setEncryptedItem(CURRENT_USER, JSON.stringify(user))
        _setUser(user)
    }

    const setToken = (token) => {
        token && localStorage.setEncryptedItem(ACCESS_TOKEN, token)
        _setToken(token)
    }

    const verifyLogin = async () => {
        try {
            const { token } = await verifyUser()
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

    axiosClient.interceptors.request.use(async (config) => {
        const token = localStorage.getDecryptedItem(ACCESS_TOKEN)
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    });

    const verifyUser = async () => {
        try {
            const { data } = await axiosClient.get('/token/refresh')
            if (!data) throw new Error("Erro ao recuperar usuário!"); 7
            console.log({ data })
            return data;
        } catch (error) {
            const { response } = error;
            response?.status === 401 && clearAuthStorages();
            console.error('Error:', error);
            throw error;
        }
    }

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
