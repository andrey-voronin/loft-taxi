import React from 'react'
import Map from './Map'
import {LoginWithAuth} from './Login'
import {ProfileWithAuth} from './Profile'
import {withAuth} from './AuthContext'

const PAGES = {
  map: (props) => <Map {...props} />, 
  login: (props) => <LoginWithAuth {...props} />,
  profile: (props) => <ProfileWithAuth {...props} />
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {currentPage: 'login'}
    this.navigateTo = this.navigateTo.bind(this)
  }
  
  navigateTo(page) {
    if(this.props.isLoggedIn) {
      this.setState({currentPage: page})
    } else {
      this.setState({currentPage: 'login'})
    }
    
  }

  render() {
    const {currentPage} = this.state
    return (
      <>
        <header>
          <nav>
            <ul>
              <li><button onClick={() => this.navigateTo('map')}>Карта</button></li>
              <li><button onClick={() => this.navigateTo('login')}>Войти</button></li>
              <li><button onClick={() => this.navigateTo('profile')}>Профиль</button></li>
            </ul>
          </nav>
        </header>
        <main>
          <section>
            {PAGES[currentPage]({navigateTo: this.navigateTo})}
          </section>
        </main>
      </>
    )
  }
}

export default withAuth(App);
