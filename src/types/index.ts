export interface Product {
  _id: string;
  title: string;
  price: number;
  image: string[];
  type_candle: string;
  size: number;
  aroma: string;
  appointment: string;
  burning_time: string;
  short_describe: string;
  color: string;
  material: string;
  shape: string;
  features: string;
  gift_packaging: boolean;
  season_collection: boolean;
  comments: string[];
  stock: number;
  rate_avg_product: number;
  createdAt: string;
  __v: number;
  composition: string;
  care: string;
  characteristics: {
    topNotes: string;
    heartNotes: string;
    baseNotes: string;
  };
}

export interface cartProduct extends Product {
  quantity: number;
}

export interface FiltersState {
  types: string[];
  price: string[];
  size: string[];
  aroma: string[];
  assignment: string[];
  color: string[];
  material: string[];
  form: string[];
  features: string[];
  giftWrapping: boolean;
}

export const initialFiltersState: FiltersState = {
  types: [],
  price: [],
  size: [],
  aroma: [],
  assignment: [],
  color: [],
  material: [],
  form: [],
  features: [],
  giftWrapping: false,
};

export interface CreateOrder {
  firstName: string;
  telephone: string;
  email: string;
  userEmail: string;
  lastname: string;
  deliveryMethod: "self_pickup" | "nova_post";
  deliveryCity: string;
  deliveryDepartment: string;
  payment: "cash" | "online payment";
  isCallRestricted?: boolean;
  comment?: string;
}

export interface CreateProduct {
  _id?: string;
  title: string;
  price: number | string;
  file: File[];
  type_candle: string;
  size: number | string;
  aroma: string;
  appointment: string;
  burning_time: string;
  short_describe: string;
  color: string;
  material: string;
  shape: string;
  features: string;
  gift_packaging: boolean;
  season_collection: boolean;
  stock: number | string;
  care: string;
  composition: string;
  characteristics: {
    topNotes: string;
    heartNotes: string;
    baseNotes: string;
  };
}

export interface createOrderResponse {
  message: string;
  order: {
    userId: string;
    deliveryCompanyId: string;
    firstName: string;
    lastName: string;
    telephone: string;
    email: string;
    amountOrder: number;
  };
}

export interface userInfo {
  email?: string;
  password?: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  role?: "admin" | "user";
}

export enum OrderStatus {
  processing = "Обробляється",
  accepted = "Прийнято",
  delivered = "Відправлено",
  received = "Отримано",
  canceled = "Відхилено",
  "on the way" = "В дорозі",
  return = "Повернення",
}
// export const orderStatusLabels: Record<OrderStatus, string> = {
//   [OrderStatus.Processing]: "Обробляється",
//   [OrderStatus.Accepted]: "Прийнято",
//   [OrderStatus.Sent]: "Відправлено",
//   [OrderStatus.Received]: "Отримано",
//   [OrderStatus.Canceled]: "Скасовано",
// };
interface OrderProducts {
  id: string;
}

export type DeliveryMethod = "self_pickup" | "nova_post";

export type PaymentMethod = "cash" | "online payment";

interface Delivery {
  address: {
    city: string;
    department: string;
  };
  method: DeliveryMethod;
}

export interface AdminOrder {
  _id: string;
  code: string;
  created: string;
  amountOrder: number;
  delivery: Delivery;
  email: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  notes: string;
  isCallRestricted: boolean;
  isPaid: boolean;
  paymentMethod: PaymentMethod;
  products: OrderProducts[];
  status: keyof typeof OrderStatus;
  userId: string;
  __v?: number;
}

interface OrderStatistics {
  quantity: number;
  amount: number;
}

export interface AdminOrderStatistics {
  totalOrdersNum: OrderStatistics;
  completedOrdersNum: OrderStatistics;
  returnedOrdersNum: OrderStatistics;
  mostPurchasedProducts: {
    productId: string;
    quantity: number;
  }[];
  salesScheduleInfo: {
    date: string;
    totalCreatedOrders: number;
    totalAmount: number;
  }[];
}
