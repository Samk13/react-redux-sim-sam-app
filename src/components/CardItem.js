import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { remove, edit, toggleSeen } from '../features/articles/articlesSlice'
import { ReactComponent as CloseIcon } from '../icons/close.svg'
import TextAreaComponent from './TextAreaComponent'
import InputComponent from './InputComponent'
import ArticleButton from './ArticleButton'
import CardImage from './_CardImage'
import CardBody from './_CardBody'

import styles from './cardItem.module.css'

CardItem.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  lastEdited: PropTypes.string,
  seen: PropTypes.bool,
  imgUrl: PropTypes.string,
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

  const [isLoading, setIsLoading] = useState('false')

  const inputRef = useRef(null)
  const handleEdit = ({ id, author, body }) => () => {
    setIsLoading('true')
    setTimeout(() => {
      setToggleEditMode(true)
      setEditText((prevState) => ({
        ...prevState,
        id: props.id,
        author: props.author,
        body: props.body
      }))
      setToggleEditMode(id)
      setEditText((prevState) => ({ ...prevState, author, body }))
      setIsLoading('false')
    }, 1500)
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
      <CardImage url={props.imgUrl} onChange={() => handleToggleSeen(props)} />
      <div className={styles.closeBtn} onClick={() => dispatch(remove(props.id))}>
        <CloseIcon className={styles.closeIcon} />
      </div>
      {!toggleEditMode && <CardBody title={props.author} body={props.body} />}
      <div className={styles.cardTitle}>
        {toggleEditMode && (
          <>
            <InputComponent
              ref={inputRef}
              name="author"
              placeholder="author"
              tabIndex="1"
              onChange={(e) =>
                setEditText((prevState) => ({
                  ...prevState,
                  author: e.target.value
                }))
              }
              value={EditText.author}
            />
            <TextAreaComponent
              placeholder="body"
              onChange={(e) =>
                setEditText((prevState) => ({
                  ...prevState,
                  body: e.target.value
                }))
              }
              name="body"
              value={EditText.body}
              tabIndex="2"
            />
          </>
        )}
      </div>
      <hr className={styles.divider} />
      <div className={styles.cardFooter}>
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
      <div className={styles.btnContainer}>
        {toggleEditMode ? (
          <>
            <div className={styles.saveCancelContainer}>
              <span className={styles.saveBtn}>
                <ArticleButton variant="primary-pink" onClick={handleSaveEdit} tabIndex="3">
                  Save
                </ArticleButton>
              </span>
              <span className={styles.cancelBtn}>
                <ArticleButton
                  variant="secondary"
                  tabIndex="4"
                  onClick={() => setToggleEditMode(false)}
                >
                  Cancel
                </ArticleButton>
              </span>
            </div>
          </>
        ) : (
          <ArticleButton
            variant="secondary"
            loading={isLoading.toString()}
            onClick={handleEdit(props)}
          >
            Edit
          </ArticleButton>
        )}
      </div>
    </div>
  )
}
