import {Route, Routes} from 'react-router-dom'
import {SignUp} from './components/SignUp'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthLayout} from './AuthLayout'
import React from "react";

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<SignUp />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
