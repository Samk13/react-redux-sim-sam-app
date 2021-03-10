import React, { forwardRef } from 'react'
import styles from './articleButton.module.css'
import LoadingItem from './LoadingItem'

function ArticleButton(_props, ref) {
  const VARIANTS = {
    primary: 'primary',
    primaryPink: 'primary-pink',
    secondary: 'secondary',
    secondaryPink: 'secondary-pink'
  }
  const handleVariants = (variant) => {
    switch (variant) {
      case VARIANTS.primary:
        return [styles.btn, styles.primary].join(' ')
      case VARIANTS.primaryPink:
        return [styles.btn, styles.primaryPink].join(' ')
      case VARIANTS.secondary:
        return [styles.btn, styles.secondary].join(' ')
      case VARIANTS.secondaryPink:
        return [styles.btn, styles.secondaryPink].join(' ')
      default:
        console.error(
          `${variant} does not exist on ArticleButton variant type, try '${VARIANTS.primaryPink}' or '${VARIANTS.secondaryPink}'
          or check src/components/ArticleButton.js
          `
        )
        break
    }
  }
  return (
    <button
      className={_props.variant ? handleVariants(_props.variant) : styles.btn}
      disabled={(_props.loading === 'true' && true) || _props.disabled}
      ref={ref}
      {..._props}
    >
      <span>
        <p className={styles.children}>{_props.children}</p>
        {_props.loading === 'true' && (
          <span className={styles.loading}>
            <LoadingItem />
          </span>
        )}
      </span>
    </button>
  )
}

export default forwardRef(ArticleButton)
