import React from 'react'
import Map from './Map'
import Login from './Login'
import Profile from './Profile'

const PAGES = {
  map: Map, 
  login: Login,
  profile: Profile
}

class App extends React.Component {
  state = {currentPage: 'map'}

  navigateTo(page) {
    this.setState({currentPage: page})
  }

  render() {
    const {currentPage} = this.state
    const Page = PAGES[currentPage]
    return (
      <>
        <header>
          <nav>
            <ul>
              <li><button onClick={() => this.navigateTo('map')}>Карта</button></li>
              <li><button onClick={() => this.navigateTo('login')}>Войти</button></li>
              <li><button onClick={() => this.navigateTo('profile')}>Регистрация</button></li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            <Page navigateTo={this.navigateTo.bind(this)} />
          </section>
        </main>
      </>
    )
  }
}

export default App;
