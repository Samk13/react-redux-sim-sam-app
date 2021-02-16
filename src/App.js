import React,{ lazy, Suspense } from 'react';
import HeaderComponent from './components/HeaderComponent'
import SidebarComponent from './components/sidebarComponent'
import FooterComponent from './components/FooterComponent'
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App() {
  const renderLoader = () => <p>Loading ...</p>;
  return (
    <>
      <Router>
          <HeaderComponent className="header" />
          <main className="container">
            <Switch>
              <Suspense fallback={renderLoader()}>
                <Route  path="/" exact component={ lazy(()=>import('./pages/HomePage'))} />
                <Route  path="/redux" component={lazy(()=>import('./pages/ReduxPage'))} />
              </Suspense>
            </Switch>
          </main>
          <aside className="sidebar">
            <SidebarComponent />
          </aside>
          <section className="section1">
            section1
          </section>
            <FooterComponent className="footer" />
      </Router>
    </>
  );
}

export default App;
