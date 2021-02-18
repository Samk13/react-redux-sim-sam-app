import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './HeaderComponent.module.css'
import { ReactComponent as MenuIcon } from '../icons/menu.svg'

export default function HeaderComponent() {

    const [open, setOpen] = useState(false);

    const handleClick = ()=> setOpen(!open);
    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <div>
                    <Link className={styles.routeLink} to="/">
                        React-redux App
                    </Link>
                </div>
                <span className={styles.icon} onClick={handleClick}>
                   <MenuIcon />
                </span>
            </div>
        </header>
    )
}
