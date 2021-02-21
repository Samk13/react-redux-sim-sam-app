import React from 'react'
import PropTypes from 'prop-types'

ArticleListItem.propTypes = {
  id: PropTypes.string,
  author: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  seen: PropTypes.bool
}

export default function ArticleListItem(props) {
  return (
    <section>
      <div>
        <div>{props.author}</div>
        <div>{props.body}</div>
        <div>{props.createdAt}</div>
        <div>{props.seen}</div>
      </div>
      <div>{props.seen ? 'seen' : 'Not seen yet'}</div>
    </section>
  )
}
