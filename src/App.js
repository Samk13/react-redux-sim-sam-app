import React, { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { menuStatus } from './features/menu/menuSlice'
import FooterComponent from './components/FooterComponent'
import HeaderComponent from './components/HeaderComponent'
import SidebarComponent from './components/SidebarComponent'
import LoadingItem from './components/LoadingItem'
import routes from './router/routes'

import styles from './App.module.css'

const { loaderContainer, container, containerHideSidebar, header, main, footer } = styles
function App() {
  const renderLoader = () => (
    <div className={loaderContainer}>
      <LoadingItem />
    </div>
  )
  const menuActive = useSelector(menuStatus)
  return (
    <Router>
      <section className={menuActive ? container : containerHideSidebar}>
        <header className={header}>
          <HeaderComponent />
        </header>
        <main className={main}>
          <Switch>
            <Suspense fallback={renderLoader()}>
              {routes.map((route, key) => {
                return (
                  <Route
                    key={key}
                    path={route.path}
                    exact={route.exact}
                    component={lazy(() => import(`${route.location}`))}
                  />
                )
              })}
            </Suspense>
          </Switch>
        </main>
        {menuActive && <SidebarComponent />}
        <footer className={footer}>
          <FooterComponent className={footer} />
        </footer>
      </section>
    </Router>
  )
}

export default App
