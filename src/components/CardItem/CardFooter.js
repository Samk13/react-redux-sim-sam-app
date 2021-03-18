import React from 'react'
import PropTypes from 'prop-types'
import DdChip from '../dropDownMenu/DdChip'

import styles from './cardItem.module.css'

CardFooter.propTypes = {
  createdAt: PropTypes.string,
  lastEdited: PropTypes.string,
  seen: PropTypes.bool,
  type: PropTypes.array,
  canRemoveType: PropTypes.bool,
  removeType: PropTypes.func
}

const { divider, cardFooter, cardInfo, clicked } = styles
export default function CardFooter(props) {
  const { createdAt, lastEdited, seen, type } = props
  return (
    <>
      <hr className={divider} />
      <div className={cardFooter}>
        <div className={cardInfo}>
          <div>
            <div>Created at: {createdAt && createdAt}</div>
            <div>Last edited: {lastEdited && lastEdited}</div>
            <div className={clicked}>{seen ? 'clicked' : 'not clicked'}</div>
            {type?.map((t) => (
              <DdChip key={t.key}>{t.title}</DdChip>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
