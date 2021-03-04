import React, { useState, useEffect, useRef } from 'react'
import styles from './cardItem.module.css'
import { ReactComponent as CloseIcon } from '../icons/close.svg'
import ArticleButton from './ArticleButton'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { remove, edit, toggleSeen } from '../features/articles/articlesSlice'

CardItem.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  lastEdited: PropTypes.string,
  seen: PropTypes.bool,
  image: PropTypes.string,
  delete: PropTypes.bool,
  className: PropTypes.string
}

export default function CardItem(props) {
  const dispatch = useDispatch()
  const [toggleEditMode, setToggleEditMode] = useState(false)
  const [EditText, setEditText] = useState({
    id: '',
    author: '',
    body: '',
    lastEdited: new Date().toDateString()
  })

  const inputRef = useRef(null)
  const handleEdit = ({ id, author, body }) => () => {
    setToggleEditMode(true)
    setEditText((prevState) => ({
      ...prevState,
      id: props.id,
      author: props.author,
      body: props.body
    }))
    setToggleEditMode(id)
    setEditText((prevState) => ({ ...prevState, author, body }))
  }

  const handleSaveEdit = () => {
    dispatch(edit(EditText))
    setEditText(() => ({ id: '', author: '', body: '' }))
    setToggleEditMode(false)
  }

  const handleToggleSeen = ({ id }) => {
    dispatch(toggleSeen(id))
  }

  useEffect(() => {
    if (inputRef.current) {
      const inp = inputRef.current
      return inp.focus()
    }
    return
  }, [toggleEditMode])

  return (
    <div className={styles.card}>
      <figure className={styles.figure}>
        {props.image ? (
          <img src={props.image} alt="article img" onClick={() => handleToggleSeen(props)} />
        ) : null}
      </figure>
      <div className={styles.closeBtn} onClick={() => dispatch(remove(props.id))}>
        <CloseIcon />
      </div>
      <div className={styles.cardTitle}>
        {toggleEditMode ? (
          <input
            className={styles.editAuthor}
            ref={inputRef}
            type="text"
            name="author"
            placeholder="author"
            onChange={(e) =>
              setEditText((prevState) => ({
                ...prevState,
                author: e.target.value
              }))
            }
            id="input"
            value={EditText.author}
          />
        ) : (
          <div>{props.author}</div>
        )}
      </div>
      <div className={styles.cardBody}>
        {toggleEditMode ? (
          <textarea
            type="text"
            className={styles.editBody}
            placeholder="body"
            onChange={(e) =>
              setEditText((prevState) => ({
                ...prevState,
                body: e.target.value
              }))
            }
            name="body"
            value={EditText.body}
          />
        ) : (
          <p>{props.body}</p>
        )}
      </div>
      <div className={styles.cardFooter}>
        <hr className={styles.divider} />
        <div className={styles.cardInfo}>
          <span>
            <span>
              {props.createdAt ? <div>created at: {props.createdAt}</div> : <div>created at:</div>}
            </span>
            <span>
              {props.lastEdited ? (
                <div>last edited: {props.lastEdited}</div>
              ) : (
                <div>last edited:</div>
              )}
              <span>{props.seen ? 'clicked' : 'not clicked'}</span>
            </span>
          </span>
        </div>
      </div>
      {toggleEditMode ? (
        <>
          <div className={styles.saveCancelContainer}>
            <span className={styles.saveBtn}>
              <ArticleButton onClick={handleSaveEdit}>Save</ArticleButton>
            </span>
            <span className={styles.cancelBtn}>
              <ArticleButton onClick={() => setToggleEditMode(false)}>Cancel</ArticleButton>
            </span>
          </div>
        </>
      ) : (
        <ArticleButton onClick={handleEdit(props)}>edit</ArticleButton>
      )}
    </div>
  )
}
