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

const { cardTitle, cardBody, btnContainer } = styles

export default function CardContent(props) {
  const { author, body, loading, onClickEdit } = props
  return (
    <>
      <div className={cardTitle}>
        <div>{author}</div>
      </div>
      <div className={cardBody}>
        <div>{body}</div>
      </div>
      <CardFooter {...props} />
      <div className={btnContainer}>
        <ArticleButton variant="secondary" loading={loading} onClick={onClickEdit()}>
          Edit
        </ArticleButton>
      </div>
    </>
  )
}
