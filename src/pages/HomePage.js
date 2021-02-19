import { useDispatch } from 'react-redux'
import React from 'react'
// import styles from './HomePage.module.css'
import { create } from '../features/articles/articlesSlice'
import { useForm } from 'react-hook-form'

export default function HomePage() {
  // const [article, setArticle] = useState('')
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    console.log(data)
    dispatch(create(data))
  }

  return (
    <>
      <section>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="author"
            name="author"
            ref={register({ required: true, minLength: 2, maxLength: 13 })}
          />
          {errors.author && <span>This field is required</span>}
          <input
            type="text"
            placeholder="body"
            name="body"
            ref={register({ required: true, minLength: 2, maxLength: 1313 })}
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
