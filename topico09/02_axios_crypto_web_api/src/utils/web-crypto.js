
const masterKey = import.meta.env.VITE_SECRET_KEY;

const key = await loadKey(masterKey)
const iv = await loadInitialVector(masterKey)

export const SECRET = {
    key: !key ? await newKey() : key,
    iv: !iv ? window.crypto.getRandomValues(new Uint8Array(12)) : iv
};

const exportedKey = await window.crypto.subtle.exportKey("jwk", SECRET.key);
saveAesSecrets(masterKey, exportedKey, SECRET.iv)

async function newKey() {
    return await window.crypto.subtle.generateKey(
        {
            name: "AES-GCM",
            length: 256,
        },
        true,
        ["encrypt", "decrypt"],
    )
}

async function loadKey(storageName) {
    if (!localStorage.getItem(storageName)) return null
    try {
        const { key } = JSON.parse(localStorage.getItem(storageName));
        const jwk = JSON.parse(key)
        if (!jwk) return null;
        return await window.crypto.subtle.importKey(
            "jwk",
            jwk,
            { name: "AES-GCM" },
            true,
            ["encrypt", "decrypt"]
        );
    } catch (error) {
        console.error(error)
        return null
    }
}

async function loadInitialVector(storageName) {
    if (!localStorage.getItem(storageName)) return null
    const { iv } = JSON.parse(localStorage.getItem(storageName));
    return base64ToArrayBuffer(iv)
}

function saveAesSecrets(masterKey, exportedKey, initialVector) {
    const encodeSecrets = {
        key: JSON.stringify(exportedKey),
        iv: arrayBufferToBase64(initialVector)
    }
    localStorage.setItem(masterKey, JSON.stringify(encodeSecrets));
}

//https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt
export function encryptText(text) {
    const enc = new TextEncoder();
    const encoded = enc.encode(text);
    // let iv = window.crypto.getRandomValues(new Uint8Array(12));
    // SECRET.iv = iv;
    return window.crypto.subtle.encrypt(
        { name: "AES-GCM", iv: SECRET.iv },
        SECRET.key,
        encoded,
    );
}

// https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt
export function decryptText(cipherText) {
    // debugger;
    return window.crypto.subtle.decrypt({ name: "AES-GCM", iv: SECRET.iv }, SECRET.key, cipherText);
}

export function arrayBufferToBase64(buffer) {
    let binary = '';
    const bytes = new Uint8Array(buffer);
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

export function base64ToArrayBuffer(base64String) {
    try {
        const binaryString = window.atob(base64String);
        const len = binaryString.length;
        const bytes = new Uint8Array(len);

        for (let i = 0; i < len; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes.buffer;
    } catch (error) {
        console.error(error)
        return null
    }
}
