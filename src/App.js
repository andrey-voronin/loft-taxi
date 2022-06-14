import React from 'react'
import Map from './Map'
import Login from './Login'
import { Profile } from './Profile'
import { connect } from "react-redux"
import { Link, Route, Switch, Redirect } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import { loadState } from "./localStorage"
import { logOut, authenticate } from "./actions"


class App extends React.Component {
  componentDidMount() {
    const savedState = loadState()
    if (savedState && savedState.isLoggedIn) {
      this.props.authenticate(savedState.email, savedState.password)
    }
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              {this.props.isLoggedIn && <>
                <li><Link to="/map">Карта</Link></li>
                <li><Link to="/profile">Профиль</Link></li>
                <li><Link to="/logout" onClick={this.props.logOut}>Выйти</Link></li></>}
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Switch>
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route path="/" render={() => this.props.isLoggedIn ? <Redirect to="/map" /> : <Login />} />
            </Switch>
          </section>
        </main>
      </>
    )
  }
}
export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn }),
  { logOut, authenticate }
)(App)