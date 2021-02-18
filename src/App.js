import React, { lazy, Suspense } from 'react'
import HeaderComponent from './components/HeaderComponent'
import SidebarComponent from './components/sidebarComponent'
import FooterComponent from './components/FooterComponent'
import styles from './App.module.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import routes from './router/routes'

function App() {
  const renderLoader = () => <p>Loading ...</p>
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
