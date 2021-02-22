import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect, useRef, useState } from 'react'
import styles from './HomePage.module.css'
import { ArticleListItem } from '../components'
import { create, getArticles } from '../features/articles/articlesSlice'
import { useForm } from 'react-hook-form'

export default function HomePage() {
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
            className={styles.textareacomponent}
            ref={register({ required: true, minLength: 3, maxLength: 13 })}
          />
          {errors.author && <span>This field is required</span>}
          <label htmlFor="body">article body</label>
          <textarea
            type="text"
            id="body"
            className={styles.textareacomponent}
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
            {selectArticles.map((article, index) => {
              return (
                <div className={styles.articlesContainer} key={article.id}>
                  <ArticleListItem
                    image={article.imgUrl}
                    id={article.id}
                    author={article.author}
                    body={article.body}
                    createdAt={article.createdAt}
                    seen={article.seen}
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
