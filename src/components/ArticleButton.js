import React, { forwardRef } from 'react'
import styles from './articleButton.module.css'

function ArticleButton(_props, ref) {
  const VARIANTS = {
    primary: 'primary',
    secondary: 'secondary'
  }
  const handleVariants = (variant) => {
    switch (variant) {
      case VARIANTS.primary:
        return {
          backgroundColor: 'var(--blue-200)',
          color: 'var(--text-dark)',
          backfaceVisibility: 'hidden',
          transform: 'translateZ(0) scale(1, 1)'
        }
      case VARIANTS.secondary:
        return {
          backgroundColor: 'blue'
        }

      default:
        console.error(
          `${variant} does not exist on ArticleButton variant type, try '${VARIANTS.primary}' or '${VARIANTS.secondary}'
          or check src/components/ArticleButton.js
          `
        )
        break
    }
  }
  return (
    <button
      className={styles.btn}
      style={_props.variant ? handleVariants(_props.variant) : null}
      ref={ref}
      {..._props}
    >
      {_props.children}
    </button>
  )
}

export default forwardRef(ArticleButton)
