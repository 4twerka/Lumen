import React from 'react';
import styles from './OrderStatus.module.css';
import DoneIcon from '../../../../assets/CheckCircle.svg?react'
import TakenIcon from '../../../../assets/Taken.svg?react'

interface OrderStatusProps {
    status: "processing" | "accepted" | "sent" | "received" | "canceled";
}

const OrderStatus:React.FC<OrderStatusProps> = ({status}) => {
  return (
    <div className={`${styles.orderStatusWrapper} ${status === 'processing' ? styles.done : styles.taken}`}>
      <p className={styles.status}>{status === 'processing' ? "Прийнято" : "Виконано"}</p>
      {status === 'processing' ? <DoneIcon /> : <TakenIcon />}  
    </div>
  )
}

export default OrderStatus
