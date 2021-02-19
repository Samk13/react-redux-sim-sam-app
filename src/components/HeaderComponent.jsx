import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderComponent.module.css'
import { ReactComponent as MenuIcon } from '../icons/menu.svg'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../features/menu/menuSlice'

export default function HeaderComponent() {
  const dispatch = useDispatch()
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div>
          <Link className={styles.routeLink} to="/">
            React-redux App
          </Link>
        </div>
        <span className={styles.icon} onClick={() => dispatch(toggleMenu())}>
          <MenuIcon />
        </span>
      </div>
    </header>
  )
}
