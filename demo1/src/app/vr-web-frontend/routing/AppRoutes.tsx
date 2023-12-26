import React, {FC, useContext, useState} from 'react'
import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import {PrivateRoutes} from './PrivateRoutes'
import {ErrorsPage} from '../../modules/errors/ErrorsPage'
import {Logout, useAuth} from '../../modules/auth'
import {App} from '../App'
import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import {AuthContext} from "../context/AuthContext";
import {AuthPage} from "../pages/AuthPage";

const AppRoutes: FC = () =>
{
  const authState = useContext(AuthContext);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App/>}>
          {<Route path='error/*' element={<ErrorsPage/>}/>}
          <Route path='logout' element={<Logout />} />
          {authState.id > 0 ? (
              <>
                <Route path='/*' element={<PrivateRoutes />} />
                <Route index element={<Navigate to='/dashboard' />} />
              </>
          ) : (
              <>
                  <Route path='auth/*' element={<AuthPage />} />
                  <Route path='*' element={<Navigate to='/auth' />} />
              </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export {AppRoutes}
