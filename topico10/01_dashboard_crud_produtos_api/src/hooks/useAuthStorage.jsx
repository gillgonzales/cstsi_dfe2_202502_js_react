import md5 from "crypto-js/md5";
import { SECRET } from "../utils/encrypt-storage";

export default function useAuthStorage() {
    const storage = { vars: [] }
    const uuidPattern = /[0-9a-f]{8}[0-9a-f]{4}[0-9a-f]{4}[0-9a-f]{4}[0-9a-f]{12}/
    const arrayStorage = Object.entries(localStorage).filter(i => i[0].match(uuidPattern));
    console.log('token', arrayStorage)

    if (arrayStorage?.length) {
        const [ACS_TKN, CUR_USR] = arrayStorage
        storage.vars = [CUR_USR[0], ACS_TKN[0]]
        try {
            JSON.parse(localStorage.getDecryptedItem(CUR_USR[0]))
        } catch (error) {
            console.warn('ERRO', error)
            storage.vars = [ACS_TKN[0], CUR_USR[0]]
        }
    } else {
        storage.vars = [
            md5(navigator.userAgent + SECRET).toString(), //CURRENT_USER
            md5(SECRET + navigator.userAgent).toString() //ACCESS_TOKEN
        ];
    }

    const [CURRENT_USER, ACCESS_TOKEN] = storage.vars

    const clearAuthStorages = () => {
        console.log('clear')
        console.log(CURRENT_USER)
        console.log(ACCESS_TOKEN)

        localStorage.removeItem(ACCESS_TOKEN);
        localStorage.removeItem(CURRENT_USER);
        localStorage.removeItem('vars');
    }

    return [CURRENT_USER, ACCESS_TOKEN, clearAuthStorages];
}