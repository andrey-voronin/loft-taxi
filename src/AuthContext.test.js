import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { AuthContextProvider, AuthContext } from './AuthContext.js'

describe("AuthContext", () => {
        it('logs in and logs out', () => {
            let isLoggedIn
            let logIn
            let logOut
            render(
                <AuthContextProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn
                            logIn = value.logIn
                            logOut = value.logIn                            

                            return null
                        }}
                    </AuthContext.Consumer>
                </AuthContextProvider>
            )
            expect(isLoggedIn).toBe(false)
            act(() =>  logIn('valid@email.com', 'correctpassword'))
            expect(isLoggedIn).toBe(true)
            act(() =>  logOut())
            render(
                <AuthContextProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn
                            
                            return null
                        }}
                    </AuthContext.Consumer>
                </AuthContextProvider>
            )

            expect(isLoggedIn).toBe(false)
        })
})