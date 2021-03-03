import React from 'react'
import styles from './cardItem.module.css'
import { ReactComponent as CloseIcon } from '../icons/close.svg'
import ButtonComponent from './ButtonComponent'
export default function CardItem() {
  return (
    <div className={styles.card}>
      <figure className={styles.figure}>
        <img src="https://picsum.photos/200/300" alt="" />
      </figure>
      <div>
        <div className={styles.closeBtn}>
          <CloseIcon />
        </div>
        <div className={styles.cardTitle}>
          <h3>Author title</h3>
        </div>
        <div className={styles.cardBody}>
          <p>
            Lorem ipsum dolor sit, amen consenter adipisicing elite. Laborer dolores, commode
            dubious sapele laudanum delegati nebo quash mollitia
          </p>
        </div>
        <hr className={styles.divider} />
        <div>
          <p>created at 876876</p>
          <p>last edited 09789798</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <ButtonComponent>edit</ButtonComponent>
        {/* <ButtonComponent>seen</ButtonComponent> */}
      </div>
    </div>
  )
}
