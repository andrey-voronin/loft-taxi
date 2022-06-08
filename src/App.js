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
  const auth_context = useContext(AuthContext)

  useEffect(() => {
    if(auth_context.isLoggedIn) {
      if(currentPage === 'login') {
        setCurrentPage('map')
      }
    } else {
      setCurrentPage('login')
    }
  }, [currentPage, auth_context.isLoggedIn])

  return <>
    {auth_context.isLoggedIn && <Header navigateTo={navigateTo} />}
    <main>
      <section>
        {PAGES[currentPage]({ navigateTo })}
      </section>
    </main>
  </>

}

export default App
