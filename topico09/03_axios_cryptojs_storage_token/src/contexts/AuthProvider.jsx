/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react"
import axiosClient from "../utils/axios-client";
import md5 from "crypto-js/md5";
import { encrypt, manipulateLocalStorage, SECRET } from "../utils/encrypt-storage";

manipulateLocalStorage()

const CURRENT_USER = md5(navigator.userAgent+SECRET);
const ACCESS_TOKEN = md5(SECRET+navigator.userAgent);

axiosClient.interceptors.request.use(async (config) => {
    const token = localStorage.getDecryptedItem(ACCESS_TOKEN)
    if (token){
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

const  verifyUser = async () => {
    try {
        const { data } = await axiosClient.get('/user')
        if (!data) throw new Error("Erro ao recuperar usuário!");7
        console.log({data})
        return data;
    } catch (error) {
        const { response } = error;
        response?.status === 401 && clearAuthStorages();
        console.error('Error:', error);
        throw error;
    }
}

const clearAuthStorages = () => {
    console.log('clear')
     console.log(CURRENT_USER)
     console.log(ACCESS_TOKEN)

    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(CURRENT_USER);
}

const AuthContext = createContext({
    user: {},
    token: null,
    setUser: () => { },
    setToken: () => { },
    verifyLogin: () => { },
    logOut: ()=>{}
})

export const AuthProvider = ({ children }) => {

    const [user, _setUser] = useState(()=>localStorage.getDecryptedItem(CURRENT_USER))
    const [token, _setToken] = useState(()=>localStorage.getDecryptedItem(ACCESS_TOKEN))

    const setUser = (user) => {
         user && localStorage.setEncryptedItem(CURRENT_USER, JSON.stringify(user))
         !user && clearAuthStorages();
         _setUser(user)
    }

    const setToken = (token) => {
        if(!token){
            clearAuthStorages();
            return
        }
        localStorage.setEncryptedItem(ACCESS_TOKEN, token)
        _setToken(localStorage.getDecryptedItem(ACCESS_TOKEN))
    }

    const verifyLogin = async () => {
        try {
            const {token} = await verifyUser()
            console.log(token)
            setToken(token)
            return true;
        } catch (error) {
            setToken(null)
            setUser(null)
            console.error(error)
            return false;
        }
    }

    const logOut = ()=>{
        clearAuthStorages()
        setUser(null)
        setToken(null)
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
