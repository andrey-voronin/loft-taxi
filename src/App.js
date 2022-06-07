import React from 'react'
import Map from './Map'
import { LoginWithAuth } from './Login'
import { ProfileWithAuth } from './Profile'
import { connect } from "react-redux"
import { Link, Route, Switch } from "react-router-dom"
import {PrivateRoute} from "./PrivateRoute"

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Вход</Link></li>
              <li><Link to="/map">Карта</Link></li>
              <li><Link to="/profile">Профиль</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Switch>
              <Route exact path="/" component={LoginWithAuth} />
              <PrivateRoute path="/map" component={Map} />
              <PrivateRoute path="/profile" component={ProfileWithAuth} />
            </Switch>
          </section>
        </main>
      </>
    )
  }
}
export default connect(
  (state) => ({ isLoggedIn: state.auth.isLoggedIn })
)(App)