import React from 'react'
import { connect } from "react-redux"
import { logOut } from "./actions"

class Profile extends React.Component {

    unauthenticate = () => {
        this.props.logOut()
    }

    render () {
        return <>
        <h2>Профиль пользователя</h2>
        <button onClick={this.unauthenticate}>Выйти</button>
        </>
    }
}

export const ProfileWithAuth = connect(
    null,
    { logOut }
)(Profile)
