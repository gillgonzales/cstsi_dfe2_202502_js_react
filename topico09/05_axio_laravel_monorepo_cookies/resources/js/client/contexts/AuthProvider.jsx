/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react"
import { axiosClient } from "../utils/axios-client";
import md5 from "crypto-js/md5";
import { manipulateLocalStorage, SECRET } from "../utils/encrypt-storage";

manipulateLocalStorage()

const CURRENT_USER = md5(navigator.userAgent + SECRET);

const verifyUser = async () => {
    try {
        const { data } = await axiosClient.get('/api/user')
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

const clearAuthStorages = () => {
    console.log('clear')
    console.log(CURRENT_USER)
    localStorage.removeItem(CURRENT_USER);
}

const AuthContext = createContext({
    user: {},
    auth: () => { },
    setUser: () => { },
    verifyLogin: () => { },
    logOut: () => { }
})

export const AuthProvider = ({ children }) => {

    const [user, _setUser] = useState(() => localStorage.getDecryptedItem(CURRENT_USER))

    const setUser = (user) => {
        user && localStorage.setEncryptedItem(CURRENT_USER, JSON.stringify(user))
        !user && clearAuthStorages();
        _setUser(user)
    }

    const auth = async (credentials) => {
        await axiosClient.get('sanctum/csrf-cookie')
        const response = await axiosClient.post("/login", credentials);
         if (response?.status !== 200) throw new Error(response.data);
        const { data } = response;
        console.log({ data });
        setUser(data.data);
    }

    const verifyLogin = async () => {
        try {
            await verifyUser()
            return true;
        } catch (error) {
            setUser(null)
            console.error(error)
            return false;
        }
    }

    const logOut = async () => {
        await axiosClient.post('logout')
        clearAuthStorages()
        setUser(null)
    }

    useEffect(() => {
        verifyUser()
            .then(user => setUser(user))
            .catch(console.error)
    }, []);

    return (
        <AuthContext.Provider value={{
            user,
            auth,
            setUser,
            verifyLogin,
            logOut,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
