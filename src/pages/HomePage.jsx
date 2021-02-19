import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import styles from './HomePage.module.css'
import { create, edit, remove, show } from '../features/article/articleSlice'

export default function HomePage() {
  const dispatch = useDispatch()
  const articles = useSelector(show)
  const [author, setAuthor] = useState('')
  const [data, setData] = useState('')

  const handleCreateNewArticle = () => {
    console.log('handleCreateNewArticle')
  }
  // const handleNewInputChange = () => { console.log('handleNewInputChange');}
  // const newArticleInput = () => { console.log('newArticleInput');}

  return (
    <section>
      <div>
        author: {author}
        <br />
        body: {data}
      </div>
      <div>
        <h1>redux</h1>
        <ul>
          {articles.map((article, key) => (
            <li key={key}>
              <span>{article.id}</span>
              <span>{article.author}</span>
              <span>{article.body}</span>
            </li>
          ))}
        </ul>
        <h1>redux</h1>
      </div>
      <form onSubmit={handleCreateNewArticle}>
        <label htmlFor="author">Author</label>
        <input
          className={styles.textbox}
          aria-label="Set article author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label htmlFor="article">article body</label>
        <textarea
          className={styles.textarea}
          id="article"
          name="articleBoby"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button type="submit">Save</button>
      </form>
    </section>
  )
}
