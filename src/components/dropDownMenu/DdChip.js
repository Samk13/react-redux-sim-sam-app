import React from 'react'
import propTypes from 'prop-types'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'

import styles from './dropDownMenu.module.css'

DdChip.propTypes = {
  children: propTypes.node,
  removeValue: propTypes.func,
  canRemoveType: propTypes.bool
}
const { dropdownValue, dropdownRemove, closeIcon } = styles

export default function DdChip({ children, canRemoveType, removeValue }) {
  return (
    <div className={dropdownValue}>
      <p>{children} </p>
      {canRemoveType && (
        <span className={dropdownRemove} onClick={() => removeValue()}>
          <CloseIcon className={closeIcon} />
        </span>
      )}
    </div>
  )
}
