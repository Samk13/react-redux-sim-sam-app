import React, { useEffect, useRef, useState } from 'react'
import styles from './articleForm.module.css'
import ArticleButton from './ArticleButton'
import TextAreaComponent from './TextAreaComponent'
import InputComponent from './InputComponent'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import { create } from '../features/articles/articlesSlice'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
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

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="author"
          name="author"
          errors={errors?.author && 'This field is required'}
          placeholder="author"
          ref={authorRef}
        />
        <TextAreaComponent
          placeholder="body"
          tag="input"
          label="body"
          name="body"
          id="body"
          errors={errors?.body && 'This field is required'}
          ref={register({ required: true })}
        />
        <DropDownMenu />
        <ArticleButton variant="primary-pink" type="submit" loading={isLoading}>
          Submit
        </ArticleButton>
      </form>
    </div>
  )
}
