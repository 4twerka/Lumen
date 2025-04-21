import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice";
import orderReducer from "./slices/orderSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        products: productReducer,
        order: orderReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch