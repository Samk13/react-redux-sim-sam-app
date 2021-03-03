import React from 'react'
import styles from './cardItem.module.css'

export default function CardItem() {
  return (
    <div className={styles.card}>
      <figure>
        <img src="" alt="" />
      </figure>
      <div>
        <div>
          <h3>Author title</h3>
          <p>X</p>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit, amen consenter adipisicing elite. Laborer dolores, commode
            dubious sapele laudanum delegati nebo quash mollitia
          </p>
        </div>
        <div>
          <p>created at 876876</p>
          <p>last edited 09789798</p>
        </div>
      </div>
      <div>
        <button>edit</button>
        <button>seen</button>
      </div>
    </div>
  )
}
