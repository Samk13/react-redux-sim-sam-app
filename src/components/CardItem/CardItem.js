import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { remove, edit, toggleSeen } from '../../features/articles/articlesSlice'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardEdit from './CardEdit'
import { articleTypes } from '../../app/data'

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
  className: PropTypes.string,
  type: PropTypes.array
}

const UPDATEDATATYPE = {
  AUTHOR: 'author',
  BODY: 'body',
  TYPE: 'type'
}

export default function CardItem(props) {
  const [toggleEditMode, setToggleEditMode] = useState(false)

  const [isLoading, setIsLoading] = useState('false')

  const dispatch = useDispatch()

  const inputRef = useRef(null)

  const [selectedType, setSelectedType] = useState([])

  const [editText, setEditText] = useState({
    id: '',
    author: '',
    body: '',
    type: selectedType,
    lastEdited: new Date().toDateString()
  })

  const handleUpdateData = (payload, type) => {
    switch (type) {
      case UPDATEDATATYPE.AUTHOR:
        setEditText((prevState) => ({
          ...prevState,
          author: payload.target.value
        }))
        break
      case UPDATEDATATYPE.BODY:
        setEditText((prevState) => ({
          ...prevState,
          body: payload.target.value
        }))
        break
      case UPDATEDATATYPE.TYPE:
        setEditText((prevState) => ({
          ...prevState,
          type: selectedType
        }))
        break
      default:
        console.error(
          `${type} is not supported type check sec/components/CardItem/CardItem.js -> handleData function`
        )
    }
  }

  const handleEdit = ({ id }) => () => {
    setIsLoading('true')
    setTimeout(() => {
      setToggleEditMode(true)
      setEditText((prevState) => ({
        ...prevState,
        id,
        author: props.author,
        body: props.body,
        type: props.type
      }))
      setToggleEditMode(id)
      setEditText((prevState) => ({ ...prevState }))
      setIsLoading('false')
    }, 1500)
  }

  const handleSaveEdit = () => {
    dispatch(edit(editText))
    setEditText(() => ({ id: '', author: '', body: '', type: [] }))
    setToggleEditMode(false)
  }

  const handleToggleSeen = ({ id }) => {
    dispatch(toggleSeen(id))
  }

  useEffect(() => {
    if (inputRef.current) {
      return inputRef.current.focus()
    }
    return
  }, [toggleEditMode])

  const removeType = (e) => {
    console.log(e)
  }

  return (
    <div className={styles.card}>
      <CardImage url={props.imgUrl} onChange={() => handleToggleSeen(props)} />
      <div className={styles.closeBtn} onClick={() => dispatch(remove(props.id))}>
        <CloseIcon className={styles.closeIcon} />
      </div>
      {!toggleEditMode && (
        <CardContent
          {...props}
          onChildIsLoading={(value) => isLoading(value)}
          onClickEdit={() => handleEdit(props)}
          loading={isLoading.toString()}
        />
      )}
      {toggleEditMode && (
        <CardEdit
          {...props}
          setEditAuthor={(e) => handleUpdateData(e, UPDATEDATATYPE.AUTHOR)}
          setEditBody={(e) => handleUpdateData(e, UPDATEDATATYPE.BODY)}
          onClickCancel={() => setToggleEditMode(false)}
          onClickSave={() => handleSaveEdit}
          editText={editText}
          options={articleTypes}
          onDdChange={(e) => setSelectedType(e)}
          selectedType={selectedType}
          removeType={(e) => removeType(e)}
        />
      )}
    </div>
  )
}
