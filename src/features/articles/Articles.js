import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ArticleListItem, InputComponent } from '../../components'
import { create, getArticles } from './articlesSlice'
import { useForm } from 'react-hook-form'
import styles from './articles.module.css'

export default function Articles() {
  const { register, handleSubmit, errors, reset } = useForm()
  const selectArticles = useSelector(getArticles)
  const authorRef = useRef(null)
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(create(data))
    reset()
  }
  useEffect(() => {
    if (authorRef.current) {
      register(authorRef.current, { required: true, maxLength: 20 })
      authorRef.current.focus()
    }
    return
  }, [register])

  return (
    <div className={styles.container}>
      <section>
        <form className={styles.articlesContainer} onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            errors={errors?.author && 'This field is required'}
            ref={authorRef}
            placeholder="author"
            label="author"
            name="author"
            type="text"
          />
          <label htmlFor="body">article body</label>
          <textarea
            ref={register({ required: true })}
            className={styles.textarea}
            placeholder="body"
            type="text"
            name="body"
            id="body"
          />
          {errors.body && <span>This field is required</span>}
          <label htmlFor="article">article body</label>
          <button className={styles.btnSubmit} type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className={styles.articlesContainer}>
        <h1>all articles</h1>
        <div>
          <div>
            {selectArticles.map(({ id, lastEdited, createdAt, author, imgUrl, body, seen }) => {
              return (
                <div key={id} className={styles.article}>
                  <ArticleListItem
                    lastEdited={lastEdited}
                    createdAt={createdAt}
                    author={author}
                    image={imgUrl}
                    body={body}
                    seen={seen}
                    id={id}
                    delete={true}
                  />
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
