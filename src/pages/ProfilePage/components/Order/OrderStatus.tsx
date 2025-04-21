import React from 'react';
import styles from './OrderStatus.module.css';
import DoneIcon from '../../../../assets/CheckCircle.svg?react'
import TakenIcon from '../../../../assets/Taken.svg?react'

interface OrderStatusProps {
    status: string;
}

const OrderStatus:React.FC<OrderStatusProps> = ({status}) => {
  return (
    <div className={`${styles.orderStatusWrapper} ${status === 'done' ? styles.done : styles.taken}`}>
      <p className={styles.status}>{status === 'done' ? "Прийнято" : "Виконано"}</p>
      {status === 'done' ? <DoneIcon /> : <TakenIcon />}  
    </div>
  )
}

export default OrderStatus
