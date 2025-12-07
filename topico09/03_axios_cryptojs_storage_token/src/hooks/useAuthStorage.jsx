import md5 from "crypto-js/md5";
import { SECRET } from "../utils/encrypt-storage";

export default function useAuthStorage() {
    const storage = { vars: [] }

    if (!localStorage.getItem('vars')) {
        const CURRENT_USER = md5(navigator.userAgent + SECRET);
        const ACCESS_TOKEN = md5(SECRET + navigator.userAgent);
        localStorage.setItem('vars', [CURRENT_USER, ACCESS_TOKEN])
    } else {
        storage.vars = localStorage.getItem('vars').split(',')
        console.log(storage)
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