import React from 'react'

const AuthContext = React.createContext()

export const AuthContextProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)

    const logIn = (email, password) => {
        if(email !== 'valid@email.com' || password !== 'correctpassword') {
            return
        }
        setIsLoggedIn(true)
    }

    const logOut = () => {
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider value={{logIn, logOut, isLoggedIn}}>
        {children}
    </AuthContext.Provider>

}

export const withAuth = (WrappedComponent) => {
    return class extends React.Component {
            render() {
                return <AuthContext.Consumer>
                    {(value) => <WrappedComponent {...value} {...this.props} />}
                </AuthContext.Consumer>
            }
        }
}