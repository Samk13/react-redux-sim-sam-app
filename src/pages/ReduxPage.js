import React from 'react'
import logo from '../logo.svg';
import { Counter } from '../features/counter/Counter';
import styles from './ReduxPage.module.css'

export default function ReduxPage() {
    return (
        <div>
            <section className={styles.appHeader}>
                <img src={logo} className={styles.appLogo} alt="logo" />
                <Counter />
            </section>
        </div>
    )
}
