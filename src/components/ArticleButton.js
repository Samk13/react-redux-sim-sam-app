import React, { forwardRef } from 'react'
import styles from './articleButton.module.css'

function ArticleButton(_props, ref) {
  return (
    <button className={styles.btn} ref={ref} {..._props}>
      {_props.children}
    </button>
  )
}

export default forwardRef(ArticleButton)
