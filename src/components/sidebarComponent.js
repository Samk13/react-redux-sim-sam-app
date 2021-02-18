import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './sidebarComponent.module.css'
export default function sidebarComponent() {
  return (
    <aside className={styles.aside}>
      <ul className={styles.unorderedList}>
        <li className={styles.list}>
          <NavLink className={styles.link} activeClassName={styles.active} to="/" exact>
            Home
          </NavLink>
        </li>
        <li className={styles.list}>
          <NavLink className={styles.link} activeClassName={styles.active} to="/redux">
            redux page
          </NavLink>
        </li>
      </ul>
    </aside>
  )
}
