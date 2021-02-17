import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderComponent.module.css'

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
                    <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 512 512"
                        height="1em" width="1em"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
                    </svg>
                </span>
            </div>
        </header>
    )
}
