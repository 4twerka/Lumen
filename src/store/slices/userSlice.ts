import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'
import axiosInstance from '../../utils/axiosInstance';
import { API } from '../../constants';
import { userInfo } from '../../types';

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
  userId: string | null;
  token: string;
  users: User[];
  error: string | null;
  status: string;
  isLoading: boolean;
  user: userInfo | null;
}

const initialState: UserState = {
    userId: null,
    token: localStorage.getItem('accessToken') ?? sessionStorage.getItem('accessToken') ?? '',
    users: [],
    error: null,
    status: '',
    isLoading: false,
    user: null
}

export const registerUser = createAsyncThunk<string, UserRegister, {rejectValue: string}>(
    'user/registerUser',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${API}/api/auth/signUp`, userData);
            return response.data as string;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data.message || "Server Error!");
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
            return response.data.token;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data.message || "Server Error!");
            }
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)
export const logOutUser = createAsyncThunk<string, void, {rejectValue: string}>(
    'user/loginOutUser',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.post(`/api/auth/logout`, {});
            localStorage.removeItem('accessToken');
            sessionStorage.removeItem('accessToken');
            return response.data;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data.message || "Server Error!");
            }
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)
// export const verifyEmail = createAsyncThunk<string, { email: string }, {rejectValue: string}>(
//     'user/verifyEmail',
//     async (id, {rejectWithValue}) => {
//         try {
//             const response = await axiosInstance.post(`${API}/api/auth/accountRecovery`, id);
//             localStorage.setItem('a')
//         } catch (error: unknown) {
//             if (axios.isAxiosError(error) && error.response) { 
//               return rejectWithValue(error.response.data || "Server Error!");
//             }
//             return rejectWithValue("Unexpected error occurred!");
//           }
//     }
// )

export const accoutRecoveryUser = createAsyncThunk<string, { email: string }, {rejectValue: string}>(
    'user/accoutRecoveryUser',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axios.post(`${API}/api/auth/passwordRecovery`, userData);
            return response.data.message as string;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data || "Server Error!");
            }
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)
export const getUserInfo = createAsyncThunk<userInfo, void, {rejectValue: string}>(
    'user/getUserInfo',
    async (_, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.get(`/api/user-self-access/profile`);
            return response.data as userInfo;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data.title as string || "Server Error!");
            }
            return rejectWithValue("Unexpected error occurred!");
          }
    }
)
export const updateUserInfo = createAsyncThunk<userInfo, userInfo, {rejectValue: string}>(
    'user/updateUserInfo',
    async (userData, {rejectWithValue}) => {
        try {
            const response = await axiosInstance.patch(`/api/user-self-access/profile`, userData);
            return response.data as userInfo;
        } catch (error: unknown) {
            if (axios.isAxiosError(error) && error.response) { 
              return rejectWithValue(error.response.data.title as string || "Server Error!");
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
    },
    setUserId: (state, action: PayloadAction<string | null>) => {
        state.userId = action.payload;
    },
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
            state.isLoading = false;
        })
        .addCase(accoutRecoveryUser.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(accoutRecoveryUser.rejected, (state, action) => {
            state.error = action.payload || "Something went wrong";
            state.isLoading = false;
        })
        .addCase(getUserInfo.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getUserInfo.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        })
        .addCase(getUserInfo.rejected, (state, action) => {
            state.error = action.payload || "Something went wrong";
            state.isLoading = false;
        })
        .addCase(updateUserInfo.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(updateUserInfo.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoading = false;
        })
        .addCase(updateUserInfo.rejected, (state, action) => {
            state.error = action.payload || "Something went wrong";
            state.isLoading = false;
        })
        .addCase(logOutUser.fulfilled, (state) => {
            state.token = '';
            state.error = null;
            state.isLoading = false;
        })
        .addCase(logOutUser.rejected, (state, action) => {
            state.error = action.payload || "Something went wrong";
            state.isLoading = false;
        })
        .addCase(logOutUser.pending, (state) => {
            state.isLoading = true;
        })
  }
})

export const { clearErrors, clearStatus, setUserId } = userSlice.actions;

export default userSlice.reducer;