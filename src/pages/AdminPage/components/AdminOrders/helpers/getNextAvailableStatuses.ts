import { OrderStatus } from "../../../../../types";

export const getNextAvailableStatuses = (
  currentStatus: keyof typeof OrderStatus
): (keyof typeof OrderStatus)[] => {
  switch (currentStatus) {
    case "processing":
      return ["accepted", "canceled"];
    case "accepted":
      return ["on the way", "canceled"];
    case "on the way":
      return ["delivered", "canceled"];
    case "delivered":
      return ["received", "return", "canceled"];
    default:
      return [];
  }
};
