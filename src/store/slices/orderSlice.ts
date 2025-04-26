import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { API } from "../../constants";

interface ProductOrder {
  productId: string;
  quantity: number;
}

interface CreateOrder {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  paymentMethod: 'cash' | 'online payment';
  products: ProductOrder[];
  delivery: {
    method: 'self_pickup' | 'nova_post';
    address: {
        city: string;
        department: string;
    };
};
  notes?: string | '';
  isCallRestricted?: boolean;
}

interface OrderResponce extends CreateOrder {
  amountOrder: number;
  status: "processing" | "accepted" | "sent" | "received" | "canceled";
  isPaid: boolean;
  code: string;
  created: string;
}

interface Order extends OrderResponce {
  id: string;
  userId: string;
}

interface OrderState {
  orders: Order[];
  error: string | null;
  isLoading: boolean;
}

const initialState: OrderState = {
  orders: [],
  error: null,
  isLoading: false,
};

export const createOrder = createAsyncThunk<
  Order,
  CreateOrder,
  { rejectValue: string }
>("order/createOrder", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API}/api/orders`, userData);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data.message || "Server Error!");
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});
export const fetchOrders = createAsyncThunk<
  Order[],
  void,
  { rejectValue: string }
>("order/fetchOrders", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/api/user-self-access/orders`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(
        (error.response.data.title as string) || "Server Error!"
      );
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});

const userSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.fulfilled, (state, action) => {
        state.orders.push(action.payload);
        state.error = null;
        state.isLoading = false;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.orders = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export const { clearErrors } = userSlice.actions;

export default userSlice.reducer;
