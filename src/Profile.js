import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthContext } from './AuthContext'

export const Profile = (props) => {
    const auth_context = useContext(AuthContext)
    return <>
    <h2>Профиль пользователя</h2>
    <button onClick={() => {
        auth_context.logOut()
        props.navigateTo('login')
     }}>Выйти</button>
    </>    
}

Profile.propTypes = {
    navigateTo: PropTypes.func.isRequired
}

