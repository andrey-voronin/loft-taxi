import profile from "./profile.js"
import { setProfile } from "../actions"

describe("profile reducer", () => {
    it("sets profile on setProfile action", () => {
        expect(profile({}, setProfile("1234123412341234", "12/01", "BRAVE USER", "777"))).toEqual({ profile: { cardNumber: "1234123412341234", expireDate: "12/01", cardName: "BRAVE USER", cvc: "777" } })
    })
})