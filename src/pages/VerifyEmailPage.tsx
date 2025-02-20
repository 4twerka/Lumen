import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../utils/axiosInstance";
import { API } from "../constants";

const VerifyEmailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axiosInstance.get(`${API}/api/auth/verifyEmail/${id}`);
        const response = await axiosInstance.post(`${API}/api/auth/refresh`);
        console.log(response);
        
        localStorage.setItem("accessToken", JSON.stringify(response.data.token));
        console.log(localStorage.getItem('accessToken'));
        
        navigate("/");
      } catch (error) {
        console.error("Помилка верифікації:", error);
        navigate("/login");
      }
    };
    verifyEmail();
  }, [id, navigate]);

  return <h2>Підтвердження акаунта...</h2>;
};

export default VerifyEmailPage;
