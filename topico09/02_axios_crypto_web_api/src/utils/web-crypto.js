
export const SECRET = 
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
export  function encryptText(text) {
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
  const binaryString = window.atob(base64String);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }

  return bytes.buffer;
}
