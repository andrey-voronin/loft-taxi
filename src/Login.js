import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

export const Login = (props) => {
    const auth_context = useContext(AuthContext)
    return <>
    <h2>Войти</h2>
    <form onSubmit={(event) => {
        event.preventDefault()
        const { email, password } = event.target
        auth_context.logIn(email.value, password.value)
    }}>
        <label htmlFor='email'>E-mail</label>
        <input type='text' name='email' id='email' size='15' />
        <label htmlFor='password'>Пароль</label>
        <input type='password' name='password' id='password' size='15' />
        <input type='submit' value='Войти' />
    </form>
    </>
}
