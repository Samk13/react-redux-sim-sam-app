import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import TextAreaComponent from '../TextAreaComponent'
import InputComponent from '../InputComponent'
import ArticleButton from '../ArticleButton'

import styles from './cardItem.module.css'

CardEdit.propTypes = {
  createdAt: PropTypes.string,
  lastEdited: PropTypes.string,
  seen: PropTypes.bool,
  onClickCancel: PropTypes.func,
  onClickSave: PropTypes.func,
  editText: PropTypes.object,
  setEditTextArea: PropTypes.func,
  setEditAuthor: PropTypes.func
}

export default function CardEdit(props) {
  const inputRef = useRef(null)
  useEffect(() => {
    if (inputRef.current) {
      const inp = inputRef.current
      return inp.focus()
    }
    return
  }, [])

  return (
    <>
      <div className={styles.cardTitle}>
        <InputComponent
          ref={inputRef}
          name="author"
          placeholder="Author"
          tabIndex="1"
          onChange={(e) => props.setEditAuthor(e)}
          value={props.editText.author}
        />
      </div>
      <div className={styles.cardBody}>
        <TextAreaComponent
          placeholder="Body"
          onChange={(e) => props.setEditTextArea(e)}
          name="body"
          value={props.editText.body}
          tabIndex="2"
        />
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
        <div className={styles.saveCancelContainer}>
          <span className={styles.saveBtn}>
            <ArticleButton variant="primary-pink" onClick={props.onClickSave()} tabIndex="3">
              Save
            </ArticleButton>
          </span>
          <span className={styles.cancelBtn}>
            <ArticleButton variant="secondary" tabIndex="4" onClick={() => props.onClickCancel()}>
              Cancel
            </ArticleButton>
          </span>
        </div>
      </div>
    </>
  )
}
