import React, { useState } from "react"
import Map from './Map'
import { Login } from './Login'
import { Profile } from './Profile'
import { Header } from './Header'

const PAGES = {
  map: (props) => <Map {...props} />,
  login: (props) => <Login {...props} />,
  profile: (props) => <Profile {...props} />
}

const App = () => {
  const [currentPage, setCurrentPage] = useState('login')
  const navigateTo = (page) => {
    setCurrentPage(page)
  }

  return <>
    <Header navigateTo={navigateTo} />
    <main>
      <section>
        {PAGES[currentPage]({ navigateTo })}
      </section>
    </main>
  </>

}

export default App
