import React from 'react'
import { ArticleForm, CardItem } from '../../components'
import styles from './articleTest.module.css'

export default function ArticleTest() {
  return (
    <div>
      <div className={styles.formContainer}>
        <p className={styles.title}>The Article Generator</p>
      </div>
      <div className={styles.formContainer}>
        <ArticleForm />
      </div>
      <div className={styles.container}>
        <div className={styles.cardContainer}>
          <CardItem />
        </div>
        <div className={styles.cardContainer}>
          <CardItem />
        </div>
        <div className={styles.cardContainer}>
          <CardItem />
        </div>
      </div>
    </div>
  )
}
