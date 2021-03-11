import React from 'react'
import { articleTypes } from './../../app/data'
import styles from './dropDownMenu.module.css'
export default function DropDownMenu() {
  return (
    <div className={styles.ddWrapper}>
      <div className={styles.ddHeader}>
        <div className={styles.ddHeaderTitle}></div>
      </div>
      <div className={styles.ddList}>
        {articleTypes.map((at) => {
          return (
            <button key={at.id} className={styles.ddListItem}>
              {at.title}
            </button>
          )
        })}
      </div>
    </div>
  )
}
