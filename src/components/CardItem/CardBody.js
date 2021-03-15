import React, { useState } from 'react'
import ArticleButton from '../ArticleButton'
import PropTypes from 'prop-types'

import styles from './cardItem.module.css'

CardBody.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  lastEdited: PropTypes.string,
  seen: PropTypes.bool,
  imgUrl: PropTypes.string,
  delete: PropTypes.bool,
  className: PropTypes.string,
  onClickEdit: PropTypes.func,
  onChildIsLoading: PropTypes.func,
  loading: PropTypes.string
}

export default function CardBody(props) {
  return (
    <>
      <div className={styles.cardTitle}>{props.author}</div>
      <div className={styles.cardBody}>
        <p>{props.body}</p>
      </div>
      <hr className={styles.divider} />
      <div className={styles.cardFooter}>
        <div className={styles.cardInfo}>
          <div>
            <div>
              <div>Created at: {props.createdAt && props.createdAt}</div>
            </div>
            <div>
              <div>Last edited: {props.lastEdited && props.lastEdited}</div>
              <div>{props.seen ? 'clicked' : 'not clicked'}</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.btnContainer}>
        <ArticleButton variant="secondary" loading={props.loading} onClick={props.onClickEdit()}>
          Edit
        </ArticleButton>
      </div>
    </>
  )
}
