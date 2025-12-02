/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from "react"
import axiosClient from "../utils/axios-client";

const storageVars = {
    CURRENT_USER:window.crypto.randomUUID(),
    ACCESS_TOKEN:window.crypto.randomUUID()
}

const SECRET = 
{ 
    key: null, 
    iv: window.crypto.getRandomValues(new Uint8Array(12)) }
window.crypto.subtle.generateKey(
    {
        name: "AES-GCM",    
        length: 256,
    },
    true,
    ["encrypt", "decrypt"],
).then(k => SECRET.key = k);


//https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
function encryptText(text) {
    const enc = new TextEncoder();
    const encoded = enc.encode(text);
    // let iv = window.crypto.getRandomValues(new Uint8Array(12));
    // SECRET.iv = iv;
    return window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv:  SECRET.iv },
        SECRET.key,
        encoded,
    );
}

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt
function decryptText(cipherText) {
    // debugger;
    return window.crypto.subtle.decrypt({ name: "AES-GCM", iv: SECRET.iv }, SECRET.key, cipherText);
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
    localStorage.removeItem(storageVars.CURRENT_USER);
}

function arrayBufferToBase64(buffer) {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function base64ToArrayBuffer(base64String) {
  const binaryString = window.atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}

function userDataFromLocalStorage(){
    console.log(localStorage)
    const arrayStorage = Object.entries(localStorage);
    const [userLocalStorage] = arrayStorage.sort((a,b)=>b[1].length-a[1].length);
    const [uuidUserName, userEncryptedData] = userLocalStorage
    console.log(uuidUserName, userEncryptedData)
    const encryptedUserBuffer = base64ToArrayBuffer(userEncryptedData)
    // const userData = decryptText(encryptedUserBuffer).then(
    //     decryptedUserData=>{
    //         const decoder = new TextDecoder('utf8', { ignoreBOM: true });
    //         const decodedDecryptedUserDataa = decoder.decode(decryptedUserData)
    //         console.log(decodedDecryptedUserDataa)
    //         debugger;   
    //     }).catch(errorMessage=>console.error(errorMessage))
    // console.log(userData)
    storageVars.CURRENT_USER = uuidUserName;
   
    return userEncryptedData;
}

const AuthContext = createContext({
    user: {},
    token: null,
    setUser: () => { },
    setToken: () => { },
    verifyLogin: () => { }
})

export const AuthProvider = ({ children }) => {

    const [user, _setUser] = useState(userDataFromLocalStorage)
    const [token, _setToken] = useState(null)

    const setUser = (user) => {
        // debugger;
        _setUser(user);
           user && encryptText(JSON.stringify(user))
            .then(cryptedUserData =>{
                console.log({cryptedUserData})
                localStorage.setItem(CURRENT_USER,arrayBufferToBase64(cryptedUserData));
            });
        // user && localStorage.setItem(CURRENT_USER, JSON.stringify(user));
    }

    const setToken = (token) => {
        // debugger;
        token && encryptText(token)
            .then(cryptedToken => {
                console.log({ token })
                console.log({ cryptedToken })
                const decoder = new TextDecoder('utf8', { ignoreBOM: true });
                const decodedCryptedToken = decoder.decode(cryptedToken)
                console.log(`text:${decodedCryptedToken}`)
                console.log('base64',arrayBufferToBase64(cryptedToken))
                localStorage.setItem(storageVars.ACCESS_TOKEN,arrayBufferToBase64(cryptedToken))
                _setToken(cryptedToken)
            });
        !token && clearAuthStorages();
    }

    const interceptBearerToken = async (config) => {
        if (token) {
            //  debugger;
            const decryptedToken = await decryptText(token);
            console.log("decrypt:", { decryptedToken })
            const plainTextToken = new TextDecoder().decode(decryptedToken)
            console.log('token descriptografado:',plainTextToken)
            if (plainTextToken) config.headers.Authorization = `Bearer ${plainTextToken}`;
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
