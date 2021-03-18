import React from 'react'
import PropTypes from 'prop-types'
import ArticleForm from '../ArticleForm'

CardEdit.propTypes = {
  onClose: PropTypes.func
}

export default function CardEdit(props) {
  return <ArticleForm editMode {...props} onClose={() => props.onClose()} />
}
