import React from 'react'
import propTypes from 'prop-types'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'

import styles from './dropDownMenu.module.css'

DdChip.propTypes = {
  children: propTypes.node,
  removeValue: propTypes.func,
  canRemove: propTypes.bool
}

export default function DdChip(props) {
  return (
    <div className={styles.dropdownValue}>
      <p>{props.children} </p>
      {props.canRemove && (
        <span className={styles.dropdownRemove} onClick={() => props.removeValue()}>
          <CloseIcon className={styles.closeIcon} />
        </span>
      )}
    </div>
  )
}
