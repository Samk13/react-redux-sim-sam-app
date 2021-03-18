import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderComponent.module.css'
import { ReactComponent as MenuIcon } from '../icons/menu.svg'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../features/menu/menuSlice'

const { header, headerContent, routeLink, icon } = styles
export default function HeaderComponent() {
  const dispatch = useDispatch()
  return (
    <div className={header}>
      <div className={headerContent}>
        <Link className={routeLink} to="/">
          React-reduxToolKit
        </Link>
        <span className={icon} onClick={() => dispatch(toggleMenu())}>
          <MenuIcon />
        </span>
      </div>
    </div>
  )
}
