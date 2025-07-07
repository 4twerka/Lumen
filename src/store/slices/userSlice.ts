import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../../utils/axiosInstance";
import { API } from "../../constants";
import { userInfo, userInfoById } from "../../types";

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
  userInfoById: userInfoById | null;
}

const initialState: UserState = {
  userId: null,
  token:
    localStorage.getItem("accessToken") ??
    sessionStorage.getItem("accessToken") ??
    "",
  users: [],
  error: null,
  status: "",
  isLoading: false,
  user: null,
  userInfoById: null,
};

export const registerUser = createAsyncThunk<
  string,
  UserRegister,
  { rejectValue: string }
>("user/registerUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API}/api/auth/signUp`, userData);
    return response.data.message as string;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data.message || "Server Error!");
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});
export const loginUser = createAsyncThunk<
  string,
  UserRegister,
  { rejectValue: string }
>("user/loginUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${API}/api/auth/signIn`, userData, {
      withCredentials: true,
    });
    return response.data.token;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data.message || "Server Error!");
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});
export const logOutUser = createAsyncThunk<
  string,
  void,
  { rejectValue: string }
>("user/loginOutUser", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(`/api/auth/logout`, {});
    localStorage.removeItem("accessToken");
    sessionStorage.removeItem("accessToken");
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data.message || "Server Error!");
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});
export const verifyEmail = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("user/verifyEmail", async (id, { rejectWithValue }) => {
  try {
    await axiosInstance.get(`/api/auth/verifyEmail/${id}`);
    const refreshResponse = await axiosInstance.post("/api/auth/refresh");
    const token = refreshResponse.data.token;
    if (!token) {
      return rejectWithValue("Token not found in localStorage!");
    }
    return token;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data || "Server Error!");
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});

export const accoutRecoveryUser = createAsyncThunk<
  string,
  { email: string },
  { rejectValue: string }
>("user/accoutRecoveryUser", async (userData, { rejectWithValue }) => {
  try {
    const response = await axios.post(
      `${API}/api/auth/passwordRecovery`,
      userData
    );
    return response.data.message as string;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(error.response.data || "Server Error!");
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});
export const getUserInfo = createAsyncThunk<
  userInfo,
  void,
  { rejectValue: string }
>("user/getUserInfo", async (_, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/api/user-self-access/profile`);
    return response.data as userInfo;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(
        (error.response.data.title as string) || "Server Error!"
      );
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});
export const updateUserInfo = createAsyncThunk<
  userInfo,
  userInfo,
  { rejectValue: string }
>("user/updateUserInfo", async (userData, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.patch(
      `/api/user-self-access/profile`,
      userData
    );
    return response.data as userInfo;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      return rejectWithValue(
        (error.response.data.title as string) || "Server Error!"
      );
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});
// export const signUpGoogle = createAsyncThunk<
//   void,
//   void,
//   { rejectValue: string }
// >("user/signUpGoogle", async (_, { rejectWithValue }) => {
//   try {
//     await axios.get(`/api/auth/google-oauth`);
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error) && error.response) {
//       return rejectWithValue(
//         (error.response.data.title as string) || "Server Error!"
//       );
//     }
//     return rejectWithValue("Unexpected error occurred!");
//   }
// });
export const getUserInfoById = createAsyncThunk<
  userInfoById | null,
  string,
  { rejectValue: string }
>("user/getUserInfoById", async (id, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.get(`/api/users/${id}`);
    return response.data as userInfoById;
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      if (error.response.status === 404) {
        return rejectWithValue("User not found");
      }
      return rejectWithValue(
        (error.response.data.title as string) || "Server Error!"
      );
    }
    return rejectWithValue("Unexpected error occurred!");
  }
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearErrors: (state) => {
      state.error = null;
    },
    clearStatus: (state) => {
      state.status = "";
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
        state.user = null;
        state.isLoading = true;
      })
      .addCase(getUserInfo.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoading = false;
      })
      .addCase(getUserInfo.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
        state.user = null;
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
        state.token = "";
        state.error = null;
        state.isLoading = false;
        state.user = null;
      })
      .addCase(logOutUser.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(logOutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.token = action.payload;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(verifyEmail.rejected, (state, action) => {
        state.error = action.payload || "Something went wrong";
        state.isLoading = false;
      })
      .addCase(verifyEmail.pending, (state) => {
        state.isLoading = true;
      })
      // .addCase(getUserInfoById.pending, (state) => {
      //   state.userInfoById = null;
      //   state.isLoading = true;
      // })
      // .addCase(getUserInfoById.fulfilled, (state, action) => {
      //   state.userInfoById = action.payload;
      //   state.isLoading = false;
      // })
      // .addCase(getUserInfoById.rejected, (state, action) => {
      //   state.error = action.payload || "Something went wrong";
      //   state.isLoading = false;
      //   state.userInfoById = null;
      // })
  },
});

export const { clearErrors, clearStatus, setUserId } = userSlice.actions;

export default userSlice.reducer;
