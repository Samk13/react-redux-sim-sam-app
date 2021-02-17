import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderComponent.module.css'
import { ReactComponent as MenuIcon } from '../icons/menu.svg'

export default function HeaderComponent() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div>
                    <Link className={styles.routeLink} to="/">
                        React-redux App
                    </Link>
                </div>
                <span className={styles.icon}>
                   <MenuIcon />
                </span>
            </div>
        </header>
    )
}
