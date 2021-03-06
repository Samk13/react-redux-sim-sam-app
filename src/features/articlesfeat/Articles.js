import React from 'react'
import ArticleForm from './../../components/ArticleForm'
import CardItem from '../../components/cardItem/CardItem'
import { useSelector } from 'react-redux'
import styles from './articles.module.css'
import { getArticles } from './articlesSlice'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './transitions.css'

const {
  inputContainer,
  TitleContainer,
  formContainer,
  container,
  formTitle,
  divider,
  title
} = styles

export default function Articles() {
  const selectArticles = useSelector(getArticles)
  // const nodeRef = React.useRef(null)

  return (
    <div>
      <div className={inputContainer}>
        <div className={TitleContainer}>
          <p className={title}>The Article Generator</p>
        </div>
        <h2 className={formTitle}>Create new Article</h2>
        <ArticleForm className={formContainer} />
      </div>
      <hr className={divider} />
      <div>
        <h2 className={formTitle}>All Article</h2>
        <TransitionGroup className={container}>
          {selectArticles?.map((article) => (
            <CSSTransition
              key={article.id}
              timeout={{ enter: 800, exit: 500 }}
              classNames="card-container"
              unmountOnExit
            >
              <CardItem {...article} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}
