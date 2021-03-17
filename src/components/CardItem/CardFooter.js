import React from 'react'
import PropTypes from 'prop-types'
import DdChip from '../dropDownMenu/DdChip'

import styles from './cardItem.module.css'

CardFooter.propTypes = {
  createdAt: PropTypes.string,
  lastEdited: PropTypes.string,
  seen: PropTypes.bool,
  type: PropTypes.array
}

export default function CardFooter({ createdAt, lastEdited, seen, type }) {
  return (
    <>
      <hr className={styles.divider} />
      <div className={styles.cardFooter}>
        <div className={styles.cardInfo}>
          <div>
            <div>Created at: {createdAt && createdAt}</div>
            <div>Last edited: {lastEdited && lastEdited}</div>
            <div className={styles.clicked}>{seen ? 'clicked' : 'not clicked'}</div>
            {type?.map((t) => (
              <DdChip key={t.key}>{t.title}</DdChip>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
