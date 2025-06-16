import React from "react";
import styles from "./OrderStatus.module.css";
import DoneIcon from "../../../../assets/CheckCircle.svg?react";
import ProcessingIcon from "@mui/icons-material/Autorenew";
import TakenIcon from "../../../../assets/Taken.svg?react";
import SendIcon from "@mui/icons-material/Send";
import CancelIcon from "@mui/icons-material/Cancel";
import OnTheWayIcon from '@mui/icons-material/ForwardToInbox';
import ReturnIcon from '@mui/icons-material/AssignmentReturn';
import { OrderStatus } from "../../../../types";

interface OrderStatusProps {
  status: keyof typeof OrderStatus;
}

const OrderStatusComponent: React.FC<OrderStatusProps> = ({ status }) => {
  let text = "";
  let Icon = null;
  let statusClass = "";
  switch (status) {
    case "processing":
      text = OrderStatus.processing;
      Icon = ProcessingIcon;
      statusClass = styles.processing;
      break
    case "accepted":
      text = OrderStatus.accepted;
      Icon = DoneIcon;
      statusClass = styles.accept;
      break
    case "delivered":
      text = OrderStatus.delivered;
      Icon = SendIcon;
      statusClass = styles.send;
      break
    case "received":
      text = OrderStatus.received;
      Icon = TakenIcon;
      statusClass = styles.received;
      break
    case "canceled":
      text = OrderStatus.canceled;
      Icon = CancelIcon;
      statusClass = styles.canceled;
      break
    case "on the way":  
      text = OrderStatus['on the way'];
      Icon = OnTheWayIcon;
      statusClass = styles.send;
      break
      case "return":  
      text = OrderStatus.return;
      Icon = ReturnIcon;
      statusClass = styles.canceled;
      break
  }
  return (
    <div
      className={`${styles.orderStatusWrapper} ${statusClass}`}
    >
      <p className={styles.status}>
        {text}
      </p>
      <Icon/>
    </div>
  );
};

export default OrderStatusComponent;
