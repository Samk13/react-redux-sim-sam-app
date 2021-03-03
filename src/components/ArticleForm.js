import React from 'react'
import styles from './articleForm.module.css'
import ButtonComponent from './ButtonComponent'
import TextAreaComponent from './TextAreaComponent'
import InputComponent from './InputComponent'

export default function ArticleForm() {
  return (
    <div className={styles.formContainer}>
      <div>
        <h2 className={styles.formTitle}>Create new Article</h2>
      </div>
      <form className={styles.form}>
        <InputComponent label="author" name="author" />
        <TextAreaComponent placeholder="body" tag="input" label="body" name="body" id="body" />
        <ButtonComponent type="submit">Submit</ButtonComponent>
      </form>
    </div>
  )
}
