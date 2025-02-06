import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const API = 'https://online-store-v28d.onrender.com'

interface UserRegister {
    email: string;
    password: string;
}

interface User extends UserRegister {
    role: string;
    _id: string;
    __v: number;
}

interface UserState {
  userId: string;
  token: string;
  users: User[];
  error: string | null;
  status: string;
  isLoading: boolean;
}

const initialState: UserState = {
    userId: '',
    token: '',
    users: [],
    error: null,
    status: '',
    isLoading: false,
}

export const registerUser = createAsyncThunk<string, UserRegister, {rejectValue: string}>(
    'user/registerUser',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${API}/api/auth/signUp`, userData);
            return response.data as string;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data || "Server Error!");
            }
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)
export const loginUser = createAsyncThunk<string, UserRegister, {rejectValue: string}>(
    'user/loginUser',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${API}/api/auth/signIn`, userData);
            return response.data as string;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data || "Server Error!");
            }
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)
export const accoutRecoveryUser = createAsyncThunk<string, { email: string }, {rejectValue: string}>(
    'user/accoutRecoveryUser',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${API}/api/auth/accountRecovery`, userData);
            console.log('accoutRecoveryUser',response);
            return response.data as string;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data || "Server Error!");
            }
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers:{
    clearErrors: (state) => {
        state.error = null;
    },
    clearStatus: (state) => {
        state.status = '';
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(registerUser.fulfilled, (state, action) => {
            state.status = action.payload;
            state.error = null;
            state.isLoading = false;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.error = action.payload || "Something went wrong";
            state.isLoading = false;
        })
        .addCase(registerUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.token = action.payload;
            state.error = null;
            state.isLoading = false;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.error = action.payload || "Something went wrong";
            state.isLoading = false;
        })
        .addCase(loginUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(accoutRecoveryUser.fulfilled, (state, action) => {
            state.status = action.payload;
        })
        .addCase(accoutRecoveryUser.rejected, (state, action) => {
            state.error = action.payload || "Something went wrong";
        })
  }
})

export const { clearErrors, clearStatus } = userSlice.actions;

export default userSlice.reducer;