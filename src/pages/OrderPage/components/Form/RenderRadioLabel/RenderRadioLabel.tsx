import React from 'react'
import styles from './RenderRadioLabel.module.css'

const RenderRadioLabel = ({title, price, desc}: {title:string, price?:string, desc?:string} ): React.ReactElement => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.infoWrapper}>
            <p className={styles.info}>{title}</p>
            <p className={styles.date}>{desc}</p>
        </div>
        <p className={styles.price}>{price}</p>
    </div>
  )
}

export default RenderRadioLabel
