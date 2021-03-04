import React from 'react'
import { ArticleForm, CardItem } from '../../components'
import { useSelector } from 'react-redux'
import styles from './articleTest.module.css'
import { getArticles } from './articlesSlice'

export default function ArticleTest() {
  const selectArticles = useSelector(getArticles)
  const revMyArr = [].concat(selectArticles).reverse()
  return (
    <div>
      <div className={styles.formContainer}>
        <p className={styles.title}>The Article Generator</p>
      </div>
      <div className={styles.formContainer}>
        <ArticleForm />
      </div>
      <div className={styles.container}>
        {revMyArr?.map(({ id, lastEdited, createdAt, author, imgUrl, body, seen }) => {
          return (
            <div className={styles.cardContainer} key={id}>
              <CardItem
                lastEdited={lastEdited}
                createdAt={createdAt}
                author={author}
                image={imgUrl}
                body={body}
                seen={seen}
                id={id}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}
