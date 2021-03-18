import React from 'react'
import styles from './FooterComponent.module.css'

const { footer, footerContent } = styles
export default function FooterComponent() {
  return (
    <footer className={footer}>
      <div className={footerContent}>
        <h1>Footer</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi laborum ex rem,
          aspernatur, ipsam sunt incidunt doloremque asperiores quae blanditiis, repellendus minima
          molestiae ad tenetur temporibus rerum? Quisquam, quia eum.
        </p>
      </div>
    </footer>
  )
}
