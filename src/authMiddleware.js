import { logIn, AUTHENTICATE } from "./actions"
import { serverLogIn } from "./api"

export const authMiddleware = (store) => (next) => async (action) => {
    if (action.type === AUTHENTICATE) {
        const { email, password } = action.payload
        const loginGranted = await serverLogIn(email, password)
        if (loginGranted) {
            store.dispatch(logIn())
        }
    } else {
        next(action)
    }
}