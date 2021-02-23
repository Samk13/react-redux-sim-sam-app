import React, { useState } from 'react'
import styles from './articleListItem.module.css'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { remove, edit, toggleSeen } from '../features/articles/articlesSlice'

ArticleListItem.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  lastEdited: PropTypes.string,
  seen: PropTypes.bool,
  image: PropTypes.string,
  delete: PropTypes.bool
}

export default function ArticleListItem(props) {
  const dispatch = useDispatch()
  const [toggleEditMode, setToggleEditMode] = useState(false)
  const [EditText, setEditText] = useState({
    id: '',
    author: '',
    body: ''
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
    <article className={styles.articleContainer} onClick={() => handleToggleSeen(props)}>
      {props.image ? <img className={styles.image} src={props.image} alt="article img" /> : null}
      <div className={styles.textContainer}>
        {toggleEditMode ? (
          <>
            <input
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
          </>
        ) : (
          <>
            <h1>{props.author}</h1>
            <p>{props.body}</p>
          </>
        )}

        <div className={styles.articleFooter}>
          {props.createdAt ? <div>{props.createdAt}</div> : null}
          {props.lastEdited ? <div>{props.createdAt}</div> : null}
          <div>{props.seen ? 'seen' : null}</div>
        </div>
        <div>
          {props.delete ? (
            <button onClick={() => dispatch(remove(props.id))}>delete article</button>
          ) : null}
          {toggleEditMode ? (
            <>
              <button onClick={handleSaveEdit}>Save</button>
              <button onClick={() => setToggleEditMode(false)}>Cancel</button>
            </>
          ) : (
            <button onClick={handleEdit(props)}>edit article</button>
          )}
        </div>
      </div>
    </article>
  )
}
