import React, { lazy, Suspense } from 'react'
import { FooterComponent, HeaderComponent, SidebarComponent, LoadingItem } from './components'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './router/routes'
import { useSelector } from 'react-redux'
import { menuStatus } from './features/menu/menuSlice'

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
