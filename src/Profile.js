import React from 'react'
import PropTypes from 'prop-types'
import {withAuth} from './AuthContext'

class Profile extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired
    }

    unauthenticate = () => {
        this.props.logOut()
        this.props.navigateTo('login')
    }

    render () {
        return <>
        <h2>Профиль пользователя</h2>
        <button onClick={this.unauthenticate}>Выйти</button>
        </>
    }
}

export const ProfileWithAuth = withAuth(Profile)
