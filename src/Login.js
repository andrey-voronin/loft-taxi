import React from 'react'
import { connect } from "react-redux"
import { authenticate } from "./actions"

export const Login = (props) => <>
    <h2>Вход</h2>
    <form onSubmit={(event) => {
        event.preventDefault()
        const { email, password } = event.target
        props.authenticate(email.value, password.value)
    }}>
        <label htmlFor='email'>E-mail</label>
        <input type='text' name='email' id='email' size='15' />
        <label htmlFor='password'>Пароль</label>
        <input type='password' name='password' id='password' size='15' />
        <input type='submit' value='Войти' />
    </form></>

export default connect(
    null,
    { authenticate }
)(Login)