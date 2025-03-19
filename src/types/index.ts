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
  comments: string[];
  stock: number;
  rate_avg_product: number;
  createdAt: string;
  __v: number;
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

export interface order {
  firstName: string;
  telephone: string;
  email: string;
  lastname: string;
  deliveryMethod: string;
  deliveryCity: string;
  deliveryDepartment: string;
  payment: string;
  callMe: boolean;
  comment: string;
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
