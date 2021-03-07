import React, { useRef } from 'react'
import { ArticleForm, CardItem } from '../../components'
import { useSelector } from 'react-redux'
import styles from './articles.module.css'
import { getArticles } from './articlesSlice'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './transitions.css'

export default function Articles() {
  const selectArticles = useSelector(getArticles)
  // const nodeRef = useRef(null)

  return (
    <div>
      <div className={styles.formContainer}>
        <p className={styles.title}>The Article Generator</p>
      </div>
      <div className={styles.formContainer}>
        <ArticleForm />
      </div>
      <TransitionGroup className={styles.container}>
        {selectArticles?.map(({ id, lastEdited, createdAt, author, body, imgUrl, seen }) => (
          <CSSTransition
            // nodeRef={nodeRef}
            key={id}
            timeout={{ enter: 800, exit: 500 }}
            classNames="card-container"
            unmountOnExit
          >
            <CardItem
              // ref={nodeRef}
              lastEdited={lastEdited}
              createdAt={createdAt}
              author={author}
              image={imgUrl}
              body={body}
              seen={seen}
              id={id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  )
}
