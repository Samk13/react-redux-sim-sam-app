import React, { useState } from 'react'
import propTypes from 'prop-types'
import styles from './dropDownMenu.module.css'
import DdChip from './DdChip'

DropDownMenu.propTypes = {
  onChange: propTypes.func,
  value: propTypes.array,
  title: propTypes.string,
  options: propTypes.array
}

export default function DropDownMenu(props) {
  const { onChange, value, title, options } = props
  const [isActive, setIsActive] = useState(true)

  const applyChange = (newItemId) => {
    onChange && onChange([...value, newItemId])
  }

  const removeValue = (removedItemId) => {
    onChange && onChange(value.filter((i) => i !== removedItemId))
  }

  return (
    <div className={styles.dropdownContainer}>
      <label className={styles.label}>{title}</label>
      <div className={styles.dropdownInput}>
        <span
          onClick={() => setIsActive(!isActive)}
          className={!isActive ? styles.arrowDown : styles.arrowUp}
        />
        <div className={styles.dropdownValues}>
          {value.length ? (
            value.map((v) => (
              <DdChip key={v.id} canRemoveType removeValue={() => removeValue(v)}>
                {v.title}
              </DdChip>
            ))
          ) : (
            <div onClick={() => setIsActive(!isActive)} className={styles.dropdownPlaceholder}>
              Select article type
            </div>
          )}
        </div>
      </div>
      <div className={isActive ? styles.dropdownOptions : styles.isActive}>
        {options
          .filter((i) => value.findIndex((v) => v.key === i.key) === -1)
          .map((item) => (
            <div key={item.id} onClick={() => applyChange(item)} className={styles.dropdownItem}>
              <img className={styles.image} src={item.logo} />
              {item.title}
            </div>
          ))}
      </div>
    </div>
  )
}
