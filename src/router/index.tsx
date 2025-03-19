import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import HomePage from "../pages/HomePage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProductsPage from "../pages/ProductsPage";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ThanksOrderPage from "../pages/ThanksOrderPage/ThanksOrderPage";
import CardPaymentPage from "../pages/CardPaymentPage/CardPaymentPage";

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/verifyEmail/:id" element={<VerifyEmailPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductsPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/thanks-order" element={<ThanksOrderPage />} />
        <Route path="/card-payment" element={<CardPaymentPage />} />
      </Route>
    </Routes>
  );
};

export default RootRouter;
