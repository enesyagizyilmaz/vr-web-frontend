import {Navigate, Route, Routes} from 'react-router-dom'
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import {AuthLayout} from "../../modules/auth/AuthLayout";
import React from "react";

const AuthPage = () => (
    <Routes>
        <Route element={<AuthLayout />}>
            <Route path='*' element={<Navigate to='login' />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<SignUp />} />
            <Route index element={<Login />} />
        </Route>
    </Routes>
)

export {AuthPage}
