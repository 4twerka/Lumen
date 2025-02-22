import axios from "axios";
// const baseURL = import.meta.env.VITE_HEAD_URL;
const baseURL = "https://online-store-prev-prod.onrender.com";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL, // базовий URL нашої API
  // headers: {
  //   "Content-Type": "application/json",
  // },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem("accessToken");
    config.headers["Authorization"] = `Bearer ${token}`;
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
    if (error.response.statusCode == 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const response = await axios.post(`${baseURL}/api/auth/refresh`, {}, {
          withCredentials: true,
        });
        localStorage.setItem("accessToken", response.data.token);
        return axiosInstance.request(originalRequest);
      } catch (error) {
        console.log(error, "Не авторизований!");
      }
    }
  }
);

export default axiosInstance;
