import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product } from "../../types";
import { API } from "../../constants";

interface UserState {
  products: Array<Product>;
  product: Product | null;
  error: string | null;
  isLoading: boolean;
  carts: { productId: string; quantity: number }[];
  //   order: createOrderResponse
}

const initialState: UserState = {
  products: [],
  product: null,
  error: null,
  isLoading: false,
  carts: JSON.parse(localStorage.getItem("carts") || "[]"),
  //   order: {}
};

export const fetchProducts = createAsyncThunk<
  Array<Product>,
  void,
  { rejectValue: string }
>("products/fetchProducts", async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API}/api/products`);
    return response.data as Array<Product>;
  } catch (error: unknown) {
    console.error("Error fetching products:", error);
    return rejectWithValue("Unexpected error occurred!");
  }
});

export const fetchProductById = createAsyncThunk<
  Product,
  string,
  { rejectValue: string }
>("products/fetchProductById", async (id, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API}/api/products/${id}`);
    return response.data as Product;
  } catch (error: unknown) {
    console.error("Error fetching products:", error);
    return rejectWithValue("Unexpected error occurred!");
  }
});

export const fetchFilteredPriceProducts = createAsyncThunk<
  Array<Product>,
  string,
  { rejectValue: string }
>("products/fetchFilteredPriceProducts", async (value, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API}/api/products?sortPrice=${value}`);
    return response.data as Array<Product>;
  } catch (error: unknown) {
    console.error("Error fetching products:", error);
    return rejectWithValue("Unexpected error occurred!");
  }
});

export const fetchFilteredDateProducts = createAsyncThunk<
  Array<Product>,
  string,
  { rejectValue: string }
>("products/fetchFilteredDateProducts", async (value, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${API}/api/products?sortDate=${value}`);
    return response.data as Array<Product>;
  } catch (error: unknown) {
    console.error("Error fetching products:", error);
    return rejectWithValue("Unexpected error occurred!");
  }
});

export const createProduct = createAsyncThunk<
  Product,
  FormData,
  { rejectValue: string }
>("products/createProduct", async (product: FormData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API}/api/products`, product);
    return response.data as Product;
  } catch (error: unknown) {
    console.error("Error creating product:", error);
    return rejectWithValue("Unexpected error occurred!");
  }
});

// export const createOrder = createAsyncThunk<
//   createOrderResponse,
//   object,
//   { rejectValue: string }
// >("products/createOrder", async (product: object, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(`${API}/api/orders/create`, product);
//     return response.data as createOrderResponse;
//   } catch (error: unknown) {
//     console.error("Error creating order:", error);
//     return rejectWithValue("Unexpected error occurred!");
//   }
// });

const productSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addCart: (state, { payload }) => {
      const existingItem = state.carts.find(
        (item) => item.productId === payload
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.carts.push({ productId: payload, quantity: 1 });
      }

      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    decreaseCart: (state, { payload }) => {
      const existingItem = state.carts.find(
        (item) => item.productId === payload
      );

      if (existingItem) {
        if (existingItem?.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          existingItem.quantity = 1;
        }
      } else {
        console.error("Item not found in cart");
      }
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    deleteCart: (state, { payload }) => {
      state.carts = state.carts.filter((item) => item.productId !== payload);
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
    clearCart: (state) => {
      state.carts = [];
      localStorage.setItem("carts", JSON.stringify(state.carts));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.product = null;
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.product = null;
        state.isLoading = true;
      })
      .addCase(fetchFilteredPriceProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilteredPriceProducts.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(fetchFilteredPriceProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchFilteredDateProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilteredDateProducts.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(fetchFilteredDateProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
        state.isLoading = false;
      })
      //   .addCase(createOrder.fulfilled, (state, {payload}) => {
      //     // state.order = payload;
      //     state.isLoading = false;
      //   })
      // .addCase(createOrder.pending, (state) => {
      //   state.isLoading = true;
      // })
      // .addCase(createOrder.rejected, (state, { payload }) => {
      //   state.isLoading = false;
      //   state.error = payload || "Something went wrong";
      // });
  },
});

export const { addCart, decreaseCart, deleteCart, clearCart } =
  productSlice.actions;

export default productSlice.reducer;
