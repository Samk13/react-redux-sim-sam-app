import React, { lazy, Suspense } from 'react'
import { FooterComponent, HeaderComponent, SidebarComponent, LoadingItem } from './components'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './router/routes'
import { useSelector } from 'react-redux'
import { menuStatus } from './features/menu/menuSlice'

function App() {
  const renderLoader = () => <LoadingItem />
  const menuActive = useSelector(menuStatus)
  return (
    <Router>
      <section className={menuActive ? styles.container : styles.containerHideSidebar}>
        <header className={styles.header}>
          <HeaderComponent />
        </header>
        <main className={styles.main}>
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
        <footer className={styles.footer}>
          <FooterComponent className={styles.footer} />
        </footer>
      </section>
    </Router>
  )
}

export default App
