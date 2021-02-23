import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './articles.modules.css'
import { ArticleListItem } from '../../components'
import { create, getArticles } from './articlesSlice'
import { useForm } from 'react-hook-form'

export default function Articles() {
  const { register, handleSubmit, errors, reset } = useForm()
  const selectArticles = useSelector(getArticles)
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(create(data))
    reset()
  }
  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="author">author</label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="author"
            className={styles.textAreaComponent}
            ref={register({ required: true, minLength: 3, maxLength: 13 })}
          />
          {errors.author && <span>This field is required</span>}
          <label htmlFor="body">article body</label>
          <textarea
            type="text"
            id="body"
            className={styles.textAreaComponent}
            placeholder="body"
            name="body"
            ref={register({ required: true, minLength: 3, maxLength: 1313 })}
          />
          {errors.body && <span>This field is required</span>}
          <label htmlFor="article">article body</label>
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h1>all articles</h1>
        <div>
          <div>
            {selectArticles.map((article) => {
              return (
                <div className={styles.articlesContainer} key={article.id}>
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
    </>
  )
}
