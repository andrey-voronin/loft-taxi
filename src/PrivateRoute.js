import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

class PrivateRoute extends React.Component {
    render() {
        return this.props.isLoggedIn ? <Route {...this.props} /> : <Redirect to="/" />
    }
}

export default connect((state) => ({ isLoggedIn: state.auth.isLoggedIn }))(PrivateRoute)