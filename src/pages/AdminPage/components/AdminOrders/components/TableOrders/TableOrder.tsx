import React from "react";
import { OrderStatus } from "../../../../../../types";
import { AdminOrder } from "../../../../../../types";
import { getNextAvailableStatuses } from "../../helpers/getNextAvailableStatuses";
import { formatDate } from "../../helpers/formatDate";
import OrderSelect from "../OrderSelect";
import OrderNoSelect from "../OrderNoSelect";
import styles from "./TableOrder.module.css"
import { useNavigate } from "react-router";

type TableOrderProps = {
  order: Pick<
    AdminOrder,
    | "_id"
    | "firstName"
    | "lastName"
    | "created"
    | "code"
    | "amountOrder"
    | "status"
  >;
};

const TableOrder: React.FC<TableOrderProps> = ({ order }) => {
  const { _id, firstName, lastName, created, code, amountOrder, status } =
    order;

  const nextStatuses = getNextAvailableStatuses(
    status as keyof typeof OrderStatus
  );

  const formattedDate = formatDate(created);
  const navigate = useNavigate();

  return (
    <tr onClick={() => navigate(`/admin/order/${_id}`)} className={styles.order}>
      <td style={{ width: "150px" }}>{code}</td>
      <td>
        {firstName}' '{lastName}
      </td>
      <td>{formattedDate}</td>
      <td>Product name</td>
      <td style={{ width: "115px" }}>{amountOrder} ₴</td>
      <td style={{width: '200px'}}>
        {nextStatuses.length > 0 ? (
          <OrderSelect id={_id} nextStatuses={nextStatuses} status={status} />
        ) : (
          <OrderNoSelect status={status} />
        )}
      </td>
    </tr>
  );
};

export default TableOrder;
