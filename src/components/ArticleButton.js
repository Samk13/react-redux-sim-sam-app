import React, { forwardRef } from 'react'
import styles from './articleButton.module.css'
import LoadingItem from './LoadingItem'

const { btn, btnChildren, loadingBtn, primary, primaryPink, secondary, secondaryPink } = styles

function ArticleButton(_props, ref) {
  const { variant, loading, disabled, children } = _props
  const VARIANTS = {
    primary: 'primary',
    primaryPink: 'primary-pink',
    secondary: 'secondary',
    secondaryPink: 'secondary-pink'
  }
  const handleVariants = (variant) => {
    switch (variant) {
      case VARIANTS.primary:
        return [btn, primary].join(' ')
      case VARIANTS.primaryPink:
        return [btn, primaryPink].join(' ')
      case VARIANTS.secondary:
        return [btn, secondary].join(' ')
      case VARIANTS.secondaryPink:
        return [btn, secondaryPink].join(' ')
      default:
        console.error(
          `${variant} does not exist on ArticleButton variant type, try '${VARIANTS.primary}', '${VARIANTS.primaryPink}', '${VARIANTS.secondary}', '${VARIANTS.secondaryPink}', or check src/components/ArticleButton.js`
        )
        break
    }
  }

  return (
    <button
      className={variant ? handleVariants(variant) : btn}
      disabled={(loading === 'true' && true) || disabled}
      ref={ref}
      {..._props}
    >
      <span>
        <p className={btnChildren}>{children}</p>
        {loading === 'true' && (
          <span className={loadingBtn}>
            <LoadingItem />
          </span>
        )}
      </span>
    </button>
  )
}

export default forwardRef(ArticleButton)
