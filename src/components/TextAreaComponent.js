import React, { forwardRef, useState } from 'react'
import { v1 as uuid } from 'uuid'
import styles from './textAreaComponent.module.css'

function TextInputComponent(_props, ref) {
  const { onChange, label, className, errors } = _props
  const [inputValue, setInputValue] = useState('')
  const id = `textarea_${uuid()}`
  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (onChange) onChange(inputValue)
  }

  return (
    <div className={styles.container}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={`${className} ${styles.textArea}`}
        onChange={handleChange}
        {..._props}
        ref={ref}
        id={id}
      />
      {errors && <span className={styles.error}>{errors}</span>}
    </div>
  )
}

export default forwardRef(TextInputComponent)
