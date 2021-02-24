import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from './inputComponent.modules.css'
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
  // calculate width height for input
  // React.useLayoutEffect(() => {
  //   const rect = combinedRef.current.getBoundingClientRect()
  //   console.log('Input dimensions:', rect.width, rect.height)
  // }, [combinedRef, ref])
  return (
    <div className={styles.inputBody}>
      <label htmlFor={id} value={_props.label}>
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder={_props.placeholder}
          className={_props.className}
          name={_props.name}
          type={inputType}
          {..._props}
          ref={combinedRef}
          id={id}
          errors={_props.errors}
        />
        <span className={styles.error}>error</span>
      </label>
    </div>
  )
})
TextInput.displayName = 'TextInput'

export default TextInput
