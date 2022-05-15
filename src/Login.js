import React from 'react'

const Login = (props) => {
    const {navigateTo} = props
    
    return <>
    <h2>Вход пользователя</h2>
    <form onSubmit={() => {navigateTo('map')}}>
        <label htmlFor='user'>Пользователь</label>
        <input type='text' name='user' id='user' size='15'/>
        <label htmlFor='password'>Пароль</label>
        <input type='password' name='password' id='password' size='15'/>
        <input type='submit' value='Войти' />
        <button onClick={() => {navigateTo('map')}}>Зарегистрирооваться</button>
    </form>
    </>
}

export default Login
