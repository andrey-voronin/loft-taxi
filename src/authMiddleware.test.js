import { authMiddleware } from "./authMiddleware"
import { authenticate, logIn } from "./actions"
import { serverLogIn } from "./api"

jest.mock("./api", () => ({serverLogIn: jest.fn(() => true)}))

describe("authMiddleware", () => {
    afterAll(jest.clearAllMocks)
    it("with correct credentials calls api and dispatches login action", async () => {
        serverLogIn.mockImplementation(async () => true)
        const dispatch = jest.fn()
        await authMiddleware({dispatch})()(authenticate("testemail", "testpassword"))
        expect(serverLogIn).toBeCalledWith("testemail", "testpassword")
        expect(dispatch).toBeCalledWith(logIn("testemail", "testpassword"))
    })
    it("with wrong credentials calls api and does not dispatch any actions", async () => {
        serverLogIn.mockImplementation(async () => false)
        const dispatch = jest.fn()
        await authMiddleware({dispatch})()(authenticate("testemail", "testpassword"))
        expect(serverLogIn).toBeCalledWith("testemail", "testpassword")
        expect(dispatch).not.toBeCalled()
    })    
})