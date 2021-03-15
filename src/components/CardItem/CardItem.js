import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { remove, edit, toggleSeen } from '../../features/articles/articlesSlice'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'

import ArticleButton from '../ArticleButton'
import CardImage from './CardImage'
import CardBody from './CardBody'

import styles from './cardItem.module.css'
import CardEdit from './CardEdit'

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
  const [editText, setEditText] = useState({
    id: '',
    author: '',
    body: '',
    lastEdited: new Date().toDateString()
  })

  const [isLoading, setIsLoading] = useState('false')

  const inputRef = useRef(null)
  const handleEdit = ({ id, author, body }) => () => {
    console.log(id, author, body)
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
    dispatch(edit(editText))
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
      {!toggleEditMode && (
        <CardBody
          {...props}
          onClickEdit={() => handleEdit(props)}
          onChildIsLoading={(value) => isLoading(value)}
          loading={isLoading.toString()}
        />
      )}

      {toggleEditMode && (
        <CardEdit
          {...props}
          editText={editText}
          setEditTextArea={(e) =>
            setEditText((prevState) => ({
              ...prevState,
              body: e.target.value
            }))
          }
          setEditAuthor={(e) =>
            setEditText((prevState) => ({
              ...prevState,
              author: e.target.value
            }))
          }
          onClickCancel={() => setToggleEditMode(false)}
          onClickSave={() => handleSaveEdit}
        />
      )}
    </div>
  )
}
