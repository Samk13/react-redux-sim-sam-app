import React from 'react'
import { ArticleForm } from '../../components'
import CardItem from '../../components/cardItem/CardItem'
import { useSelector } from 'react-redux'
import styles from './articles.module.css'
import { getArticles } from './articlesSlice'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './transitions.css'

export default function Articles() {
  const selectArticles = useSelector(getArticles)
  // const nodeRef = React.useRef(null)

  return (
    <div>
      <div className={styles.inputContainer}>
        <div className={styles.TitleContainer}>
          <p className={styles.title}>The Article Generator</p>
        </div>
        <h2 className={styles.formTitle}>Create new Article</h2>
        <ArticleForm className={styles.formContainer} />
      </div>
      <hr className={styles.divider} />
      <div>
        <h2 className={styles.formTitle}>All Article</h2>
        <TransitionGroup className={styles.container}>
          {selectArticles?.map((_props) => (
            <CSSTransition
              key={_props.id}
              timeout={{ enter: 800, exit: 500 }}
              classNames="card-container"
              unmountOnExit
            >
              <CardItem {..._props} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}
