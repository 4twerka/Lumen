import axios from "axios";
// const baseURL = import.meta.env.VITE_HEAD_URL;
import { API } from "../constants";
// import store from "../store"
// const baseURL = "https://online-store-prev-prod.onrender.com";
const baseURL = API

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL, // базовий URL нашої API
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const localToken = localStorage.getItem("accessToken");
    const sessionToken = sessionStorage.getItem("accessToken");
    const token = localToken ?? sessionToken;
    // console.log("⏩ Token:", token);
    // console.log("⏩ Config before sending:", config);
    // const token = store.getState().user.token;
    // console.log(token);
    
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status == 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const storage = localStorage.getItem("accessToken")
        ? localStorage
        : sessionStorage.getItem("accessToken")
        ? sessionStorage
        : localStorage;

      try {
        const response = await axios.post(`${baseURL}/api/auth/refresh`, {}, {
          withCredentials: true,
        });
        const newToken = response.data.token;
        storage.setItem("accessToken", newToken);
        originalRequest.headers["Authorization"] = `Bearer ${newToken}`;

        return axiosInstance(originalRequest);
      } catch (error) {
        console.log(error, "Не авторизований!");
      }
    }
  }
);

export default axiosInstance;
