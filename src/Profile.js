import React from 'react'

const Profile = (props) => {
    const {navigateTo} = props
    
    return <>
    <h2>Регистрация пользователя</h2>
    <form onSubmit={() => {navigateTo('map')}}>
        <label htmlFor='user'>Пользователь</label>
        <input type='text' name='user' id='user' size='15'/>
        <label htmlFor='fullname'>Имя и фамилия</label>
        <input type='text' name='fullname' id='fullname' size='15'/>
        <label htmlFor='email'>E-mail</label>
        <input type='email' name='email' id='email' size='15'/>                
        <label htmlFor='password'>Пароль</label>
        <input type='password' name='password' id='password' size='15'/>
        <input type='submit' value='Зарегистрироваться' />
        <button onClick={() => {navigateTo('login')}}>Войти</button>
    </form>
    </>
}

export default Profile
