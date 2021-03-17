import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import TextAreaComponent from '../TextAreaComponent'
import InputComponent from '../InputComponent'
import ArticleButton from '../ArticleButton'

import styles from './cardItem.module.css'
import CardFooter from './CardFooter'
import DropDownMenu from '../dropDownMenu/DropDownMenu'

CardEdit.propTypes = {
  createdAt: PropTypes.string,
  onClickCancel: PropTypes.func,
  onClickSave: PropTypes.func,
  editText: PropTypes.object,
  setEditBody: PropTypes.func,
  setEditAuthor: PropTypes.func,
  onDdChange: PropTypes.func,
  options: PropTypes.array,
  type: PropTypes.array,
  removeType: PropTypes.func,
  selectedType: PropTypes.array
}

export default function CardEdit(props) {
  const inputRef = useRef(null)
  useEffect(() => {
    if (inputRef.current) {
      const inp = inputRef.current
      return inp?.focus()
    }
    return
  }, [])

  return (
    <>
      <div className={styles.cardBody}>
        <InputComponent
          onChange={(e) => props.setEditAuthor(e)}
          value={props.editText.author}
          placeholder="Author"
          ref={inputRef}
          name="author"
          tabIndex="1"
        />
        <TextAreaComponent
          onChange={(e) => props.setEditBody(e)}
          value={props.editText.body}
          placeholder="Body"
          tabIndex="2"
          name="body"
        />
        <DropDownMenu
          onChange={(v) => props.onDdChange(v)}
          title="Select article type:"
          options={props.options}
          value={props.selectedType}
        />
      </div>
      <CardFooter {...props} canRemoveType removeType={(e) => props.removeType(e)} />
      <div className={styles.btnContainer}>
        <div className={styles.saveCancelContainer}>
          <div className={styles.saveBtn}>
            <ArticleButton variant="primary-pink" onClick={props.onClickSave()} tabIndex="3">
              Save
            </ArticleButton>
          </div>
          <div className={styles.cancelBtn}>
            <ArticleButton variant="secondary" tabIndex="4" onClick={() => props.onClickCancel()}>
              Cancel
            </ArticleButton>
          </div>
        </div>
      </div>
    </>
  )
}
