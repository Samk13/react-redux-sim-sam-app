import React, { useState } from 'react'
import styles from './dropDownMenu.module.css'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'

export default function DropDownMenu(_props) {
  const [isActive, setIsActive] = useState(false)

  const applyChange = (newItemId) => {
    _props.onChange && _props.onChange([..._props.value, newItemId])
  }

  const removeValue = (removedItemId) => {
    _props.onChange && _props.onChange(_props.value.filter((i) => i !== removedItemId))
  }

  return (
    <div className={styles.dropdownContainer}>
      <label className={styles.label}>{_props.title}</label>
      <div className={styles.dropdownInput}>
        <span
          onClick={() => setIsActive(!isActive)}
          className={!isActive ? styles.arrowDown : styles.arrowUp}
        ></span>
        <div className={styles.dropdownValues}>
          {_props.value.length ? (
            _props.value.map((v) => (
              <div key={v} className={styles.dropdownValue}>
                {_props.options.map((i) => {
                  if (i.id === v) {
                    return i.title
                  }
                })}
                <span className={styles.dropdownRemove} onClick={() => removeValue(v)}>
                  <CloseIcon className={styles.closeIcon} />
                </span>
              </div>
            ))
          ) : (
            <div onClick={() => setIsActive(!isActive)} className={styles.dropdownPlaceholder}>
              Select article type
            </div>
          )}
        </div>
      </div>
      <div className={isActive ? styles.dropdownOptions : styles.isActive}>
        {_props.options
          .filter((i) => _props.value.findIndex((v) => v === i.id) === -1)
          .map((item) => (
            <div key={item.id} onClick={() => applyChange(item.id)} className={styles.dropdownItem}>
              <img className={styles.image} src={item.logo} />
              {item.title}
            </div>
          ))}
      </div>
    </div>
  )
}
