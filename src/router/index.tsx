import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from '../pages/LoginPage'
import RegistrationPage from '../pages/RegistrationPage'
import ResetPassworPage from '../pages/ResetPassworPage'

const RootRouter  = () => {
  return (
    <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/reset-password' element={<ResetPassworPage />} />
    </Routes>
  )
}

export default RootRouter;
