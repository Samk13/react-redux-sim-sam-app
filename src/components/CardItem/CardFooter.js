import React from 'react'
import PropTypes from 'prop-types'

import styles from './cardItem.module.css'

CardFooter.propTypes = {
  createdAt: PropTypes.string,
  lastEdited: PropTypes.string,
  seen: PropTypes.bool
}

export default function CardFooter({ createdAt, lastEdited, seen }) {
  return (
    <>
      <hr className={styles.divider} />
      <div className={styles.cardFooter}>
        <div className={styles.cardInfo}>
          <div>
            <div>Created at: {createdAt && createdAt}</div>
            <div>Last edited: {lastEdited && lastEdited}</div>
            <div>{seen ? 'clicked' : 'not clicked'}</div>
          </div>
        </div>
      </div>
    </>
  )
}
