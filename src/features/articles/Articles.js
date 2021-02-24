import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ArticleListItem, InputComponent } from '../../components'
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
          <InputComponent
            ref={register({ required: true, minLength: 3, maxLength: 13 })}
            errors={errors.author && 'This field is required'}
            placeholder="author"
            label="author"
            name="author"
            type="text"
            id="author"
          />
          <label htmlFor="body">article body</label>
          <textarea
            ref={register({ required: true, minLength: 3, maxLength: 1313 })}
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
            {selectArticles.map((article) => {
              return (
                <div key={article.id} className={styles.article}>
                  <ArticleListItem
                    lastEdited={article.lastEdited}
                    createdAt={article.createdAt}
                    author={article.author}
                    image={article.imgUrl}
                    body={article.body}
                    seen={article.seen}
                    id={article.id}
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
