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
  return (
    <>
      <div className={styles.cardTitle}>
        <div>{props.author}</div>
      </div>
      <div className={styles.cardBody}>
        <div>{props.body}</div>
        {props.type?.map((t) => (
          <div key={t.key}>
            <p>{t.title}</p>
          </div>
        ))}
      </div>
      <CardFooter {...props} />
      <div className={styles.btnContainer}>
        <ArticleButton variant="secondary" loading={props.loading} onClick={props.onClickEdit()}>
          Edit
        </ArticleButton>
      </div>
    </>
  )
}
