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
import OrderPage from "../pages/OrderPage/OrderPage";
import ThanksOrderPage from "../pages/ThanksOrderPage/ThanksOrderPage";
import CardPaymentPage from "../pages/CardPaymentPage/CardPaymentPage";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import Orders from "../pages/ProfilePage/Orders";
import MyData from "../pages/ProfilePage/MyData";
import UpdateProductPage from "../pages/UpdateProductPage/UpdateProductPage";
import AdminPage from "../pages/AdminPage/AdminPage";
import AdminProducts from "../pages/AdminPage/components/AdminProducts/AdminProducts";
import AdminMain from "../pages/AdminPage/components/AdminMain/AdminMain";
import AdminOrders from "../pages/AdminPage/components/AdminOrders/AdminOrders";
import AdminMenuMobile from "../pages/AdminPage/components/AdminMenuMobile/AdminMenuMobile";
import AdminOrderDetails from "../pages/AdminPage/components/AdminOrderDetails/AdminOrderDetails";

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
        <Route index element={<HomePage />} />
        <Route path="/api/auth/verifyEmail/:id" element={<VerifyEmailPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/update-product/:id" element={<UpdateProductPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/thanks-order" element={<ThanksOrderPage />} />
        <Route path="/card-payment" element={<CardPaymentPage />} />
        <Route path="/profile" element={<ProfilePage />} >
            <Route path="my-orders" element={<Orders />} />
            <Route path="my-data" element={<MyData />} />
        </Route>
        <Route path="/admin" element={<AdminPage />} >
            <Route index element={<AdminMenuMobile />} />
            <Route path="products" element={<AdminProducts />} />
            <Route path="main" element={<AdminMain />} />
            <Route path="orders" element={<AdminOrders />} />
            <Route path="edit-product/:id" element={<UpdateProductPage />} />
            <Route path="create-product" element={<UpdateProductPage />} />
            <Route path="order/:id" element={<AdminOrderDetails />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default RootRouter;
