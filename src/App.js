import React, { useState, useContext, useEffect } from "react"
import Map from './Map'
import { Login } from './Login'
import { Profile } from './Profile'
import { Header } from './Header'
import { AuthContext } from './AuthContext'

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
  const { isLoggedIn } = useContext(AuthContext)

  useEffect(() => {
    if (isLoggedIn && currentPage === 'login') return setCurrentPage('map')
    setCurrentPage('login')
  }, [isLoggedIn])

  return <>
    {isLoggedIn && <Header navigateTo={navigateTo} />}
    <main>
      <section>
        {PAGES[currentPage]({ navigateTo })}
      </section>
    </main>
  </>

}

export default App
