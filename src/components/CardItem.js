import React, { useState } from 'react'
import styles from './cardItem.module.css'
import { ReactComponent as CloseIcon } from '../icons/close.svg'
import ButtonComponent from './ButtonComponent'
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
  return (
    <div className={styles.card}>
      <figure className={styles.figure}>
        {props.image ? (
          <img src={props.image} alt="article img" onClick={() => handleToggleSeen(props)} />
        ) : null}
      </figure>
      <div>
        <div className={styles.closeBtn} onClick={() => dispatch(remove(props.id))}>
          <CloseIcon />
        </div>
        <div className={styles.cardTitle}>
          {toggleEditMode ? (
            <input
              className={props.className || styles.input}
              type="text"
              name="author"
              placeholder="author"
              onChange={(e) =>
                setEditText((prevState) => ({
                  ...prevState,
                  author: e.target.value
                }))
              }
              value={EditText.author}
            />
          ) : (
            <h3>{props.author}</h3>
          )}
        </div>
        <div className={styles.cardBody}>
          {toggleEditMode ? (
            <textarea
              type="text"
              className={styles.textAreaComponent}
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
        <hr className={styles.divider} />
        <div className={styles.cardBody}>
          <span>
            <p>created at: </p>
            {props.createdAt ? <div>{props.createdAt}</div> : null}
          </span>
          <span>
            <p>last edited:</p>
            {props.lastEdited ? <div>{props.lastEdited}</div> : null}
          </span>
          <span>{props.seen ? 'seen' : null}</span>
        </div>
      </div>
      <div className={styles.cardFooter}>
        {toggleEditMode ? (
          <>
            <ButtonComponent onClick={handleSaveEdit}>Save</ButtonComponent>
            <ButtonComponent onClick={() => setToggleEditMode(false)}>Cancel</ButtonComponent>
          </>
        ) : (
          <ButtonComponent onClick={handleEdit(props)}>edit</ButtonComponent>
        )}
      </div>
    </div>
  )
}
