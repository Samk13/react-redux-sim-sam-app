import React from 'react'
import propTypes from 'prop-types'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'

import styles from './dropDownMenu.module.css'

DdChip.propTypes = {
  children: propTypes.node,
  removeValue: propTypes.func,
  canRemoveType: propTypes.bool
}

export default function DdChip({ children, canRemoveType, removeValue }) {
  return (
    <div className={styles.dropdownValue}>
      <p>{children} </p>
      {canRemoveType && (
        <span className={styles.dropdownRemove} onClick={() => removeValue()}>
          <CloseIcon className={styles.closeIcon} />
        </span>
      )}
    </div>
  )
}
