import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebarComponent.module.css'
import routes from '../router/routes'

const { aside, emptySpace, link, active } = styles
export default function sidebarComponent() {
  return (
    <>
      <aside className={aside}>
        <div className={emptySpace}></div>
        {routes.map((route, key) => (
          <NavLink className={link} key={key} activeClassName={active} to={route.path} exact>
            {route.name}
          </NavLink>
        ))}
      </aside>
    </>
  )
}
