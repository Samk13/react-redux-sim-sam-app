import React from 'react'
import styles from './articleListItem.module.css'
import PropTypes from 'prop-types'

ArticleListItem.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  seen: PropTypes.bool,
  image: PropTypes.string
}

export default function ArticleListItem(props) {
  return (
    <article className={styles.articleContainer}>
      <img className={styles.image} src={props.image} />
      <div className={styles.textContainer}>
        <h1>{props.author}</h1>
        <p>{props.body}</p>
        <div className={styles.articleFooter}>
          <div>{props.createdAt}</div>
          <div>{props.seen}</div>
          <div>{props.seen ? 'seen' : 'Not seen yet'}</div>
        </div>
      </div>
    </article>
  )
}
