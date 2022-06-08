import React, { useContext } from "react"
import { AuthContext } from './AuthContext'
import PropTypes from 'prop-types'

export const Header = (props) => {    
    const auth_context = useContext(AuthContext)
    return <header>
        <nav>

                <ul>
                    <li><button onClick={() => props.navigateTo('map')}>Карта</button></li>
                    <li><button onClick={() => props.navigateTo('profile')}>Профиль</button></li>
                    <li><button onClick={auth_context.logOut}>Выйти</button></li>
                </ul>
        </nav>
    </header>
}

Header.propTypes = {
    navigateTo: PropTypes.func.isRequired
}
