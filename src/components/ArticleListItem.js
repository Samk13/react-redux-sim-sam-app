import React from 'react'
import styles from './articleListItem.module.css'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { remove } from '../features/articles/articlesSlice'

ArticleListItem.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  seen: PropTypes.bool,
  image: PropTypes.string,
  delete: PropTypes.bool
}

export default function ArticleListItem(props) {
  const dispatch = useDispatch()
  return (
    <article className={styles.articleContainer}>
      {props.image ? <img className={styles.image} src={props.image} alt="article img" /> : null}

      <div className={styles.textContainer}>
        <h1>{props.author}</h1>
        <p>{props.body}</p>
        <div className={styles.articleFooter}>
          {props.createdAt ? <div>{props.createdAt}</div> : null}
          <div>{props.seen}</div>
          <div>{props.seen ? 'seen' : null}</div>
        </div>
        <div>
          {props.delete ? (
            <button onClick={() => dispatch(remove(props.id))}>delete article</button>
          ) : null}
        </div>
      </div>
    </article>
  )
}
