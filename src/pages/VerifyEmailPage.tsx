import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import axiosInstance from "../utils/axiosInstance";

const VerifyEmailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const API = "https://online-store-v28d.onrender.com";
  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = axiosInstance.get(`${API}/api/auth/verifyEmail/${id}`);
        localStorage.setItem("accessToken", JSON.stringify(response));
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
