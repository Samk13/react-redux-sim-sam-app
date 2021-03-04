import React, { useRef } from 'react'
import { ArticleForm, CardItem } from '../../components'
import { useSelector } from 'react-redux'
import styles from './articles.module.css'
import { getArticles } from './articlesSlice'
import * as ReactTranstionGroup from 'react-transition-group'
import './transitions.css'
const Transition = ReactTranstionGroup.CSSTransition
const GroupTransition = ReactTranstionGroup.TransitionGroup

export default function ArticleTest() {
  const selectArticles = useSelector(getArticles)
  const revMyArr = [].concat(selectArticles).reverse()
  const nodeRef = useRef(null)

  return (
    <div>
      <div className={styles.formContainer}>
        <p className={styles.title}>The Article Generator</p>
      </div>
      <div className={styles.formContainer}>
        <ArticleForm />
      </div>
      <div className={styles.container}>
        <GroupTransition component={null}>
          {revMyArr?.map(({ id, lastEdited, createdAt, author, imgUrl, body, seen }) => (
            <Transition
              nodeRef={nodeRef}
              key={id}
              timeout={{ enter: 800, exit: 500 }}
              classNames="card-container"
            >
              <div ref={nodeRef}>
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
            </Transition>
          ))}
        </GroupTransition>
      </div>
    </div>
  )
}
