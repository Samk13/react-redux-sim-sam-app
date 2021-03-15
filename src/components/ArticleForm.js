import React, { useEffect, useRef, useState } from 'react'
import styles from './articleForm.module.css'
import ArticleButton from './ArticleButton'
import TextAreaComponent from './TextAreaComponent'
import InputComponent from './InputComponent'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import { create } from '../features/articles/articlesSlice'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { articleTypes } from '../app/data'

export default function ArticleForm() {
  const { register, handleSubmit, errors, reset } = useForm()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState('false')
  const onSubmit = (data) => {
    setIsLoading('true')
    setTimeout(() => {
      dispatch(create(data))
      reset()
      setIsLoading('false')
    }, 1500)
  }

  const authorRef = useRef(null)
  useEffect(() => {
    if (authorRef.current) {
      register(authorRef.current, { required: true, maxLength: 20 })
      authorRef.current.focus()
    }
    return
  }, [register])

  const [selectedType, setSelectedType] = useState([])

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
