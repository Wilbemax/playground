import {create} from "zustand";
import {getJWT, getMe, removeJWT, setJWT} from "@/app/utils/api/api-utils";
import {endpoints} from "@/app/utils/api/config";


export const useStore = create(set => ({
    isAuth: null,
    user: null,
    token: null,

    login: (user, token) => {
        set({isAuth: true, user, token})
        setJWT(token)
    },
    logout: () => {
        set({isAuth: false, user: null, token: null})
        removeJWT()
    },
    checkIsAuth: async () => {
        const jwt = getJWT()
        if (jwt) {
            const user = await getMe(endpoints.me, jwt)
            if (user) {
                set({isAuth: true, user: user, token: jwt})
                setJWT(jwt)
            } else {
                set({isAuth: false, user: null, token: null})
                removeJWT()

            }
        }else {
            set({isAuth: false, user: null, token: null})
        }
    }
}))