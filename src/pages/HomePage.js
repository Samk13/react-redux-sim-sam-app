import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from 'react'
import styles from './HomePage.module.css'
import { ArticleListItem } from '../components'
import { create, showArticles } from '../features/articles/articlesSlice'
import { useForm } from 'react-hook-form'

export default function HomePage() {
  // const [article, setArticle] = useState('')
  const { register, handleSubmit, errors, reset } = useForm()
  const dispatch = useDispatch()
  const selectArticles = useSelector(showArticles)
  const onSubmit = (data) => {
    dispatch(create(data))
    reset()
  }
  const [isEditMode, setIsEditMode] = useState(false)
  const [editTodoInput, setEditTodoInput] = useState('')
  const handleEditInputChange = (e) => {
    setEditTodoInput(e.target.value)
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="author"
            name="author"
            ref={register({ required: true, minLength: 3, maxLength: 13 })}
          />
          {errors.author && <span>This field is required</span>}
          <textarea
            type="text"
            placeholder="body"
            name="body"
            ref={register({ required: true, minLength: 3, maxLength: 1313 })}
          />
          {errors.body && <span>This field is required</span>}
          <label htmlFor="article">article body</label>
          {/* <textarea
            className={styles.textarea}
            id="article"
            name="body"
            value={article}
            onChange={(e) => setArticle(e.target.value)}
          /> */}
          <button type="submit">Submit</button>
        </form>
      </section>
      <section>
        <h1>all articles</h1>
        <div>
          <h2>
            {selectArticles.map((article, index) => {
              return (
                <div className={styles.articlesContainer} key={article.id}>
                  <ArticleListItem
                    image={article.imageurl}
                    id={article.id}
                    author={article.author}
                    body={article.body}
                    createdAt={article.createdAt}
                    seen={article.seen}
                  />
                </div>
              )
            })}
          </h2>
        </div>
      </section>
      {/* <section>
        <h1>articles</h1>
        <div>
          <h2>title</h2>
          <p>{article.length < 1 ? 'write your article' : article}</p>
          <p>author</p>
        </div>
      </section> */}
    </>
  )
}
