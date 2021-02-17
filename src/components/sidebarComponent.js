
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './sidebarComponent.module.css'
export default function sidebarComponent() {
    return (
    <aside className={styles.aside}>
        <ul className={styles.unorderedList}>
            <li className={styles.list}>
                <div>
                    <Link className={styles.link} to="/">Home</Link>
                </div>
            </li>
            <li className={styles.list}>
                <div>
                    <Link className={styles.link} to="/redux">redux page</Link>
                </div>
            </li>
        </ul>

    </aside>
    )
}
