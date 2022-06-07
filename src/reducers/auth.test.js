import auth from "./auth.js"
import {logIn, logOut} from "../actions"

describe("auth reducer", () => {
    it("set logged in state to true on logIn action", () => {
        expect(auth({}, logIn())).toEqual({isLoggedIn: true})
    })
    it("set logged in state to false on logOut action", () => {
        expect(auth({}, logOut())).toEqual({isLoggedIn: false})
    })    
})