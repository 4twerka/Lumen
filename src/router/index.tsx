import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import HomePage from "../pages/HomePage/HomePage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import CatalogPage from "../pages/CatalogPage/CatalogPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProductPage from "../pages/ProductPage/ProductPage";
import VerifyEmailPage from "../pages/VerifyEmailPage";
import AddProductPage from "../pages/AddProductPage/AddProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ThanksOrderPage from "../pages/ThanksOrderPage/ThanksOrderPage";
import CardPaymentPage from "../pages/CardPaymentPage/CardPaymentPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Orders from "../pages/ProfilePage/Orders";
import MyData from "../pages/ProfilePage/MyData";
import UpdateProductPage from "../pages/UpdateProductPage/UpdateProductPage";
// import ProfilePageMyData from "../pages/ProfilePage/ProfilePageMyData";
// import ProfilePageMyOrders from "../pages/ProfilePage/ProfilePageMyOrders";

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
        <Route path="/api/auth/verifyEmail/:id" element={<VerifyEmailPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/update-product/:id" element={<UpdateProductPage />} />
        <Route path="/add-product" element={<AddProductPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/thanks-order" element={<ThanksOrderPage />} />
        <Route path="/card-payment" element={<CardPaymentPage />} />
        <Route path="/profile" element={<ProfilePage />} >
            <Route path="my-orders" element={<Orders />} />
            <Route path="my-data" element={<MyData />} />
        </Route>
        {/* <Route path="/profile/my-data" element={<ProfilePageMyData />} />
        <Route path="/profile/my-orders" element={<ProfilePageMyOrders />} /> */}
      </Route>
    </Routes>
  );
};

export default RootRouter;
