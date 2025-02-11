import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import ResetPasswordPage from '../pages/ResetPasswordPage'
import HomePage from '../pages/HomePage'
import ForgotPasswordPage from '../pages/ForgotPasswordPage'
import CatalogPage from '../pages/CatalogPage/CatalogPage'

const RootRouter: React.FC  = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/catalog' element={<CatalogPage />} />
    </Routes>
  )
}

export default RootRouter;
