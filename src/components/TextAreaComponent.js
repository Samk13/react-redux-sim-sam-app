import React, { forwardRef, useState } from 'react'
import { v1 as uuid } from 'uuid'
import styles from './textAreaComponent.module.css'

const { container, taLabel, textArea, error } = styles
function TextInputComponent(_props, ref) {
  const { onChange, label, className, errors } = _props
  const [inputValue, setInputValue] = useState('')
  const id = `textarea_${uuid()}`
  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (onChange) onChange(inputValue)
  }

  return (
    <div className={container}>
      {label && (
        <label className={taLabel} htmlFor={id}>
          {label}
        </label>
      )}
      <textarea
        className={`${className} ${textArea}`}
        onChange={handleChange}
        {..._props}
        ref={ref}
        id={id}
      />
      {errors && <span className={error}>{errors}</span>}
    </div>
  )
}

export default forwardRef(TextInputComponent)
