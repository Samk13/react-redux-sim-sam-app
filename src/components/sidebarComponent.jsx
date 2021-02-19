import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './SidebarComponent.module.css'
import routes from '../router/routes'

export default function sidebarComponent() {
  return (
    <aside className={styles.aside}>
      <ul className={styles.unorderedList}>
        {routes.map((route, key) => (
          <li className={styles.list} key={key}>
            <NavLink className={styles.link} activeClassName={styles.active} to={route.path} exact>
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  )
}
