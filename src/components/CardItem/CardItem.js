import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { remove, toggleSeen } from '../../features/articles/articlesSlice'
import { ReactComponent as CloseIcon } from '../../icons/close.svg'
import CardImage from './CardImage'
import CardContent from './CardContent'
import CardEdit from './CardEdit'

import styles from './cardItem.module.css'

const loadWaitingTime = 1500

CardItem.propTypes = {
  id: PropTypes.string,
  imgUrl: PropTypes.string
}

export default function CardItem(props) {
  const [toggleEditMode, setToggleEditMode] = useState(false)

  const [isLoading, setIsLoading] = useState('false')

  const dispatch = useDispatch()

  const handleEdit = () => () => {
    setIsLoading('true')
    setTimeout(() => {
      setToggleEditMode(true)
      setIsLoading('false')
    }, loadWaitingTime)
  }

  const handleToggleSeen = ({ id }) => {
    dispatch(toggleSeen(id))
  }
  const { card, closeBtn, closeIcon } = styles

  return (
    <div className={card}>
      <CardImage url={props.imgUrl} onChange={() => handleToggleSeen(props)} />
      <button
        onClick={() => dispatch(remove(props.id))}
        className={closeBtn}
        type="button"
        tabIndex="0"
      >
        <CloseIcon className={closeIcon} />
      </button>
      {toggleEditMode ? (
        <CardEdit {...props} onClose={() => setToggleEditMode(false)} />
      ) : (
        <CardContent
          {...props}
          onClickEdit={() => handleEdit(props)}
          loading={isLoading.toString()}
        />
      )}
    </div>
  )
}
