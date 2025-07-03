import { statusColors } from "../helpers/constants";
import { AdminOrder, OrderStatus } from "../../../../../types";

const OrderNoSelect = ({ status }: { status: AdminOrder["status"] }) => {
  return (
    <div
      className={"order-no-select"}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        borderRadius: "0.5rem",
        border: "1px solid #2E2E2E",
        width: "200px",
        height: '48px',
        padding: "12px 16px",
        backgroundColor: '#FCFCFC',
      }}
    >
      <span
        style={{
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: statusColors[status as keyof typeof OrderStatus],
        }}
      />
      <span>{OrderStatus[status as keyof typeof OrderStatus]}</span>
    </div>
  );
};

export default OrderNoSelect;
