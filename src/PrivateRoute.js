import React from "react"
import { Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

class PrivateRouteNew extends React.Component
{
    render() {
        return this.props.isLoggedIn ? <Route {...this.props} /> : <Redirect to="/" />
    }
}

export const PrivateRoute = connect((state) => ({isLoggedIn: state.auth.isLoggedIn}))(PrivateRouteNew)