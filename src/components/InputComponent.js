import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './inputComponent.module.css'
import { v1 as uuid } from 'uuid'

// working solution for forwarding refs https://itnext.io/reusing-the-ref-from-forwardref-with-react-hooks-4ce9df693dd

function useCombinedRefs(...refs) {
  const targetRef = useRef()
  useEffect(() => {
    refs.forEach((ref) => {
      if (!ref) return
      if (typeof ref === 'function') {
        ref(targetRef.current)
      } else {
        ref.current = targetRef.current
      }
    })
  }, [refs])
  return targetRef
}

const TextInput = forwardRef((_props, ref) => {
  const innerRef = useRef(null)
  const combinedRef = useCombinedRefs(ref, innerRef)
  const id = `input_${uuid()}`
  const [inputType] = useState(_props.type)
  const [inputValue, setInputValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value)
    if (_props.onChange) _props.onChange(inputValue)
  }
  return (
    <div className={styles.inputBody}>
      <label htmlFor={id}> {_props.label} </label>
      <input
        className={_props.input || styles.input}
        placeholder={_props.placeholder}
        onChange={handleChange}
        value={inputValue}
        name={_props.name}
        ref={combinedRef}
        type={inputType}
        {..._props}
        id={id}
      />
      <span className={styles.error}>{_props.errors}</span>
    </div>
  )
})
TextInput.displayName = 'TextInput'

export default TextInput
