import React from 'react'
import ArticleButton from '../ArticleButton'
import CardFooter from './CardFooter'
import PropTypes from 'prop-types'

import styles from './cardItem.module.css'

CardContent.propTypes = {
  author: PropTypes.string,
  body: PropTypes.string,
  onClickEdit: PropTypes.func,
  loading: PropTypes.string,
  type: PropTypes.array
}

export default function CardContent(props) {
  const { author, body, loading, onClickEdit } = props
  return (
    <>
      <div className={styles.cardTitle}>
        <div>{author}</div>
      </div>
      <div className={styles.cardBody}>
        <div>{body}</div>
      </div>
      <CardFooter {...props} />
      <div className={styles.btnContainer}>
        <ArticleButton variant="secondary" loading={loading} onClick={onClickEdit()}>
          Edit
        </ArticleButton>
      </div>
    </>
  )
}
