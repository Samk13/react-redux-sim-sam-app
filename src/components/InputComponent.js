import React, { forwardRef, useRef, useState } from 'react'
import styles from './inputComponent.module.css'
import { v1 as uuid } from 'uuid'
// working solution for forwarding refs https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd

function TextInput(_props, ref) {
  const [inputValue, setInputValue] = useState('')
  const [inputType] = useState(_props.type)
  const innerRef = useRef(null)
  const combinedRef = ref || innerRef
  const id = `input_${uuid()}`
  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (_props.onChange) _props.onChange(inputValue)
  }
  return (
    <div className={styles.inputBody}>
      <label className={styles.label} htmlFor={id}>
        {_props.label}
      </label>
      <input
        className={_props.input || styles.input}
        placeholder={_props.placeholder}
        onChange={handleChange}
        name={_props.name}
        ref={combinedRef}
        type={inputType}
        {..._props}
        id={id}
      />
      <span className={styles.error}>{_props.errors}</span>
    </div>
  )
}

export default forwardRef(TextInput)
