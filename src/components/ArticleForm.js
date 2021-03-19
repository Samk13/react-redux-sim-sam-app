import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { create, edit } from '../features/articles/articlesSlice'
import DropDownMenu from './dropDownMenu/DropDownMenu'
import TextAreaComponent from './TextAreaComponent'
import InputComponent from './InputComponent'
import ArticleButton from './ArticleButton'
import { articleTypes } from '../app/data'
import propTypes from 'prop-types'
import buttonStyle from './cardItem/cardItem.module.css'

import styles from './articleForm.module.css'

ArticleForm.propTypes = {
  id: propTypes.string,
  editMode: propTypes.bool,
  author: propTypes.string,
  body: propTypes.string,
  type: propTypes.array,
  onClose: propTypes.func
}
const { formContainer, formContainerEditMode, form } = styles

export default function ArticleForm(props) {
  const { id, author, body, type, editMode, onClose } = props

  const preloadedData = {
    author,
    body,
    type
  }
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: preloadedData
  })
  const [selectedType, setSelectedType] = useState([])
  const [isLoading, setIsLoading] = useState('false')
  const dispatch = useDispatch()
  const authorRef = useRef(null)
  const onSubmit = (data) => {
    if (!editMode) {
      setIsLoading('true')
      setTimeout(() => {
        data.type = selectedType
        dispatch(create(data))
        setSelectedType([])
        setIsLoading('false')
        reset()
      }, 1500)
    } else if (editMode) {
      data.type = selectedType
      data.id = id
      dispatch(edit(data))
      setSelectedType([])
      onClose()
      reset()
    }
  }

  useEffect(() => {
    if (type) {
      setSelectedType(type)
    }
    if (authorRef.current) {
      register(authorRef.current, { required: true, maxLength: 20 })
      authorRef.current.focus()
    }
    return
  }, [register, type])

  return (
    <div className={!editMode ? `${formContainer}` : `${formContainerEditMode}`}>
      <form className={form} onSubmit={handleSubmit(onSubmit)}>
        <InputComponent
          label="Author"
          name="author"
          errors={errors?.author && 'This field is required'}
          placeholder="Author"
          ref={authorRef}
        />
        <TextAreaComponent
          placeholder="Body"
          tag="input"
          label="Body"
          name="body"
          id="body"
          errors={errors?.body && 'This field is required'}
          ref={register({ required: true })}
        />
        <DropDownMenu
          onChange={(v) => setSelectedType(v)}
          title="Select article type:"
          options={articleTypes}
          value={selectedType}
        />
        {props.editMode ? (
          <div className={buttonStyle.btnContainer}>
            <div className={buttonStyle.saveCancelContainer}>
              <div className={buttonStyle.saveBtn}>
                <ArticleButton variant="primary-pink" tabIndex="0" type="submit">
                  Save
                </ArticleButton>
              </div>
              <div className={buttonStyle.cancelBtn}>
                <ArticleButton variant="secondary" tabIndex="0" onClick={() => props.onClose()}>
                  Cancel
                </ArticleButton>
              </div>
            </div>
          </div>
        ) : (
          <div className={buttonStyle.submitBtn}>
            <ArticleButton variant="primary-pink" type="submit" tabIndex="0" loading={isLoading}>
              Submit
            </ArticleButton>
          </div>
        )}
      </form>
    </div>
  )
}
