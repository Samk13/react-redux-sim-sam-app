import React from 'react'
import propTypes from 'prop-types'

import styles from './cardItem.module.css'

CardBody.propTypes = {
  title: propTypes.string,
  body: propTypes.string
}
export default function CardBody({ title, body }) {
  return (
    <>
      <div className={styles.cardTitle}>
        <div>{title}</div>
      </div>
      <div className={styles.cardBody}>
        <p>{body}</p>
      </div>
    </>
  )
}
