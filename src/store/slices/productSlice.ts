import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { Product } from '../../types';
import { API } from '../../constants';

interface UserState {
  products: Array<Product>;
  error: string | null;
  isLoading: boolean;
}

const initialState: UserState = {
    products: [],
    error: null,
    isLoading: false,
}

export const fetchProducts = createAsyncThunk<Array<Product>, void, {rejectValue: string}>(
    'products/fetchProducts',
    async (_,{rejectWithValue}) => {
        try {
            const response = await axios.get(`${API}/api/products`);
            return response.data as Array<Product>;
        } catch (error: unknown) {
            console.error('Error fetching products:', error)
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)

export const fetchFilteredPriceProducts = createAsyncThunk<Array<Product>, string, {rejectValue: string}>(
    'products/fetchFilteredPriceProducts',
    async (value,{rejectWithValue}) => {
        try {
            const response = await axios.get(`${API}/api/products?sortPrice=${value}`);
            return response.data as Array<Product>;
        } catch (error: unknown) {
            console.error('Error fetching products:', error)
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)
export const fetchFilteredDateProducts = createAsyncThunk<Array<Product>, string, {rejectValue: string}>(
    'products/fetchFilteredDateProducts',
    async (value,{rejectWithValue}) => {
        try {
            const response = await axios.get(`${API}/api/products?sortDate=${value}`);
            return response.data as Array<Product>;
        } catch (error: unknown) {
            console.error('Error fetching products:', error)
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)


const productSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{},
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
  }
})

// export const { } = userSlice.actions;

export default productSlice.reducer;