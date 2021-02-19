import React, { lazy, Suspense } from 'react'
import { FooterComponent, HeaderComponent, SidebarComponent, LoadingItem } from './components'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './router/routes'

function App() {
  const renderLoader = () => <LoadingItem />
  return (
    <Router>
      <div className={styles.container}>
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
        <SidebarComponent className="sidebar" />
        <footer className={styles.footer}>
          <FooterComponent className={styles.footer} />
        </footer>
      </div>
    </Router>
  )
}

export default App
