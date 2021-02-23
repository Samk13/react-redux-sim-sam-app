import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ArticleListItem } from '../../components'
import { create, getArticles } from './articlesSlice'
import { useForm } from 'react-hook-form'
import styles from './articles.module.css'

export default function Articles() {
  const { register, handleSubmit, errors, reset } = useForm()
  const selectArticles = useSelector(getArticles)
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(create(data))
    reset()
  }
  return (
    <div className={styles.container}>
      <section>
        <form className={styles.articlesContainer} onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="author">author</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="author"
            className={styles.input}
            ref={register({ required: true, minLength: 3, maxLength: 13 })}
          />
          {errors.author && <span>This field is required</span>}
          <label htmlFor="body">article body</label>
          <textarea
            className={styles.textarea}
            type="text"
            id="body"
            placeholder="body"
            name="body"
            ref={register({ required: true, minLength: 3, maxLength: 1313 })}
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
            {selectArticles.map((article) => {
              return (
                <div key={article.id} className={styles.article}>
                  <ArticleListItem
                    image={article.imgUrl}
                    id={article.id}
                    author={article.author}
                    body={article.body}
                    createdAt={article.createdAt}
                    lastEdited={article.lastEdited}
                    seen={article.seen}
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
