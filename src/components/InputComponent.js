import React, { forwardRef, useState } from 'react'
import styles from './inputComponent.module.css'
import { v1 as uuid } from 'uuid'
// working solution for forwarding refs https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd
// seems to work without it keep the link for reference in the future

const { inputBody, inputLabel, input, error } = styles
function TextInput(_props, ref) {
  const { onChange, label, styling, errors } = _props
  const [inputValue, setInputValue] = useState('')
  const id = `input_${uuid()}`
  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (onChange) onChange(inputValue)
  }
  return (
    <div className={inputBody}>
      {label && (
        <label className={inputLabel} htmlFor={id}>
          {label}
        </label>
      )}

      <input
        className={[styling, input].join(' ')}
        onChange={handleChange}
        {..._props}
        ref={ref}
        id={id}
      />
      <span className={error}>{errors}</span>
    </div>
  )
}

export default forwardRef(TextInput)
