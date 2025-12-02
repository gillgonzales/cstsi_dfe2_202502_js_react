import * as CryptoJS from 'crypto-js';

export const SECRET = import.meta.env.VITE_SECRET_KEY;

export function encrypt(txt) {
    return CryptoJS.AES.encrypt(txt, SECRET).toString();
}

export function decrypt(txtToDecrypt) {
    return CryptoJS.AES.decrypt(txtToDecrypt, SECRET).toString(CryptoJS.enc.Utf8);
}

export function manipulateLocalStorage() {
    Storage.prototype.setEncryptedItem = (key, value) => {
        localStorage.setItem(key, encrypt(value));
    };

    Storage.prototype.getDecryptedItem = (key) => {
        let data = localStorage.getItem(key) || "";
        return decrypt(data) || null;
    }
}
