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

  return (
    <div className={styles.card}>
      <CardImage url={props.imgUrl} onChange={() => handleToggleSeen(props)} />
      <div className={styles.closeBtn} onClick={() => dispatch(remove(props.id))}>
        <CloseIcon className={styles.closeIcon} />
      </div>
      {!toggleEditMode && (
        <CardContent
          {...props}
          onClickEdit={() => handleEdit(props)}
          loading={isLoading.toString()}
        />
      )}
      {toggleEditMode && <CardEdit {...props} onClose={() => setToggleEditMode(false)} />}
    </div>
  )
}
