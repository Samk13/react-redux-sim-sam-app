import React, { useEffect, useRef } from 'react'
import styles from './articleForm.module.css'
import ArticleButton from './ArticleButton'
import TextAreaComponent from './TextAreaComponent'
import InputComponent from './InputComponent'
import { create } from '../features/articles/articlesSlice'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
export default function ArticleForm() {
  const { register, handleSubmit, errors, reset } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(create(data))
    reset()
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
      <div>
        <h2 className={styles.formTitle}>Create new Article</h2>
      </div>
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
        <ArticleButton type="submit">Submit</ArticleButton>
      </form>
    </div>
  )
}
