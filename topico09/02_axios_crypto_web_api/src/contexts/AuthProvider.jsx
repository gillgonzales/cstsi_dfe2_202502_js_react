/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react"
import axiosClient from "../utils/axios-client";
import { arrayBufferToBase64, base64ToArrayBuffer, decryptText, encryptText } from "../utils/web-crypto";

const storage = {
    ACCESS_TOKEN: window.crypto.randomUUID()
}

const verifyUser = async () => {
    try {
        const { data } = await axiosClient.get('/user')
        if (!data?.name) throw new Error("Erro ao recuperar usuário!");
        return data;
    } catch (error) {
        const { response } = error;
        response?.status === 401 && clearAuthStorages();
        console.error('Error:', error);
        return null
    }
}

const clearAuthStorages = () => {
    console.log('clear')
    localStorage.removeItem(storage.ACCESS_TOKEN)
}

  function userTokenFromLocalStorage() {
        let uuidPattern = /[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/
        const arrayStorage = Object.entries(localStorage).filter(i => i[0].match(uuidPattern));
        console.log('token', arrayStorage)
        if (arrayStorage.length < 2) return null
        const [tokenLocalStorage] = arrayStorage.sort((a, b) => a[1].length - b[1].length);
        const [uuidTokenName, tokenEncryptedData] = tokenLocalStorage
        console.log(uuidTokenName, tokenEncryptedData)
        const encryptedtokenBuffer = base64ToArrayBuffer(tokenEncryptedData)
        console.log(encryptedtokenBuffer)
        storage.ACCESS_TOKEN = uuidTokenName;
        return encryptedtokenBuffer;
    }

const AuthContext = createContext({
    user: {},
    token: null,
    setUser: () => { },
    setToken: () => { },
    verifyLogin: () => { }
})

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [token, _setToken] = useState(userTokenFromLocalStorage)

    const setToken = (token) => {
        token && encryptText(token)
            .then(cryptedToken => {
                console.log({ token })
                console.log({ cryptedToken })
                const decoder = new TextDecoder('utf8', { ignoreBOM: true });
                const decodedCryptedToken = decoder.decode(cryptedToken)
                console.log(`text:${decodedCryptedToken}`)
                console.log('base64', arrayBufferToBase64(cryptedToken))
                localStorage.setItem(storage.ACCESS_TOKEN, arrayBufferToBase64(cryptedToken))
                _setToken(cryptedToken)
            });
        !token && clearAuthStorages();
    }

    const interceptBearerToken = async (config) => {
            try {
                if (!token)  return config
            //  debugger;
                const decryptedToken = await decryptText(token);
                console.log("decrypt:", { decryptedToken })
                const plainTextToken = new TextDecoder().decode(decryptedToken)
                console.log('token descriptografado:', plainTextToken)
                if (plainTextToken) 
                    config.headers.Authorization = `Bearer ${plainTextToken}`;
            } catch (error) {
                console.error(error)
            } 
            return config;
    }

    axiosClient.interceptors.request.use(interceptBearerToken);

    const verifyLogin = async () => {
        try {
            const user = await verifyUser()
            setUser(user);
            console.log("verify login", { user })
            return true;
        } catch (error) {
            console.error(error)
            return false;
        }
    }

    useEffect(() => {
        token && verifyUser()
            .then(user => setUser(user))
            .catch(console.error)
    }, [token]);

    return (
        <AuthContext.Provider value={{
            user,
            token,
            setUser,
            setToken,
            verifyLogin,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext = () => useContext(AuthContext)
