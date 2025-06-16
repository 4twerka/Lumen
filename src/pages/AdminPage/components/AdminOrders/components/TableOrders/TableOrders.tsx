import React from "react";
import styles from "./TableOrders.module.css";
import { AdminOrder } from "../../../../../../types";
import TableOrder from "./TableOrder";

interface TableOrdersProps {
  orders: AdminOrder[];
}

const TableOrders: React.FC<TableOrdersProps> = ({ orders }) => {
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>№ замовлення</th>
            <th>Покупець</th>
            <th>Дата</th>
            <th>Продукт</th>
            <th>Сума</th>
            <th>Статус</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.retreat}></tr>
          {orders.map((order) => (
            <TableOrder key={order._id} order={order} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrders;
