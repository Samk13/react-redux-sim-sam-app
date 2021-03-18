import React from 'react'
import propTypes from 'prop-types'

import styles from './cardItem.module.css'

CardImage.propTypes = {
  url: propTypes.string,
  onChange: propTypes.func
}
const { figure } = styles

export default function CardImage({ url, onChange }) {
  return (
    <figure className={figure}>
      <img src={url} alt="article img" onClick={() => onChange()} />
    </figure>
  )
}
