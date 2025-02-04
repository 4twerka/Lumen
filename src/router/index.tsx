import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import ResetPassworPage from '../pages/ResetPassworPage'
import HomePage from '../pages/HomePage'

const RootRouter: React.FC  = () => {
  return (
    <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/reset-password' element={<ResetPassworPage />} />
    </Routes>
  )
}

export default RootRouter;
