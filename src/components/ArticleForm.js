import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { create } from '../features/articles/articlesSlice'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import TextAreaComponent from './TextAreaComponent'
import InputComponent from './InputComponent'
import ArticleButton from './ArticleButton'
import { articleTypes } from '../app/data'

import styles from './articleForm.module.css'

export default function ArticleForm() {
  const { register, handleSubmit, errors, reset } = useForm()
  const [selectedType, setSelectedType] = useState([])
  const [isLoading, setIsLoading] = useState('false')
  const dispatch = useDispatch()
  const authorRef = useRef(null)
  const onSubmit = (data) => {
    setIsLoading('true')
    setTimeout(() => {
      data.type = selectedType
      dispatch(create(data))
      reset()
      setSelectedType([])
      setIsLoading('false')
    }, 1500)
  }

  useEffect(() => {
    if (authorRef.current) {
      register(authorRef.current, { required: true, maxLength: 20 })
      authorRef.current.focus()
    }
    return
  }, [register])

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Author"
          name="author"
          errors={errors?.author && 'This field is required'}
          placeholder="Author"
          ref={authorRef}
        />
        <TextAreaComponent
          placeholder="Body"
          tag="input"
          label="Body"
          name="body"
          id="body"
          errors={errors?.body && 'This field is required'}
          ref={register({ required: true })}
        />
        <DropDownMenu
          onChange={(v) => setSelectedType(v)}
          title="Select article type:"
          options={articleTypes}
          value={selectedType}
        />
        <ArticleButton variant="primary-pink" type="submit" loading={isLoading}>
          Submit
        </ArticleButton>
      </form>
    </div>
  )
}
