import React, { useState } from 'react'
import propTypes from 'prop-types'
import styles from './dropDownMenu.module.css'
import DdChip from './DdChip'

DropDownMenu.propTypes = {
  onChange: propTypes.func,
  title: propTypes.string,
  options: propTypes.array,
  value: propTypes.array
}

const {
  dropdownPlaceholder,
  dropdownContainer,
  dropdownOptions,
  dropdownValues,
  dropdownInput,
  dropdownItem,
  arrowDown,
  arrowUp,
  label,
  image
} = styles

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
    <div className={dropdownContainer}>
      <label className={label}>{title}</label>
      <div className={dropdownInput}>
        <span onClick={() => setIsActive(!isActive)} className={!isActive ? arrowDown : arrowUp} />
        <div className={dropdownValues}>
          {value.length ? (
            value.map((v) => (
              <DdChip key={v.id} canRemoveType removeValue={() => removeValue(v)}>
                {v.title}
              </DdChip>
            ))
          ) : (
            <div onClick={() => setIsActive(!isActive)} className={dropdownPlaceholder}>
              Select article type
            </div>
          )}
        </div>
      </div>
      <div className={isActive ? dropdownOptions : null}>
        {options
          .filter((i) => value.findIndex((v) => v.key === i.key) === -1)
          .map((item) => (
            <div key={item.id} onClick={() => applyChange(item)} className={dropdownItem}>
              <img className={image} src={item.logo} />
              {item.title}
            </div>
          ))}
      </div>
    </div>
  )
}
