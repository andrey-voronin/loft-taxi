import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux"
import { authenticate } from "./actions"

class Login extends React.Component {
    static propTypes = {
        navigateTo: PropTypes.func.isRequired
    }

    authenticate = (event) => {
        event.preventDefault()
        const { email, password } = event.target
        this.props.authenticate(email.value, password.value)
    }

    render() {
        return <>
            {this.props.isLoggedIn ? this.props.navigateTo('map') : (
                <form onSubmit={this.authenticate}>
                    <label htmlFor='email'>E-mail</label>
                    <input type='text' name='email' id='email' size='15' />
                    <label htmlFor='password'>Пароль</label>
                    <input type='password' name='password' id='password' size='15' />
                    <input type='submit' value='Войти' />
                </form>)}
        </>
    }
}

export const LoginWithAuth = connect(
    (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
    { authenticate }
)(Login)