import React from 'react'
import { render } from '@testing-library/react'
import { act } from 'react-dom/test-utils'
import { AuthContextProvider, AuthContext } from './AuthContext.js'

describe("AuthContext", () => {
    describe('#login', () => {
        it('sets isLoggedIn to false', () => {
            let isLoggedIn
            let logIn

            render(
                <AuthContextProvider>
                    <AuthContext.Consumer>
                        {(value) => {
                            isLoggedIn = value.isLoggedIn
                            logIn = value.logIn
                            return null
                        }}
                    </AuthContext.Consumer>
                </AuthContextProvider>
            )
            expect(isLoggedIn).toBe(false)
            act(() =>  logIn('valid@email.com', 'correctpassword'))
            expect(isLoggedIn).toBe(true)
        })
    })
})